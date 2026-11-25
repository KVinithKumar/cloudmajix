"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "motion/react";
import { AlertCircle, ArrowUpRight, ChevronDown, LoaderCircle, RotateCcw } from "lucide-react";
import { startTransition, useActionState, useEffect, useId, useRef, useState, type BaseSyntheticEvent, type ReactNode } from "react";
import { useForm, useWatch } from "react-hook-form";
import { submitLead, type ContactFormState } from "@/app/contact/actions";
import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import {
  contactSchema,
  HONEYPOT_FIELD,
  MESSAGE_MAX,
  serviceOptions,
  STARTED_AT_FIELD,
  type ContactField,
  type ContactInput,
} from "@/lib/validation";

const initialState: ContactFormState = { status: "idle", message: "" };

const emptyValues: ContactInput = { name: "", businessName: "", email: "", phone: "", service: "", message: "" };

const inputClass =
  "w-full rounded-2xl border border-white/10 bg-ink-950/60 px-4 py-3.5 text-base text-snow placeholder:text-fog/70 outline-none transition-[border-color,box-shadow] duration-300 focus:border-lime/60 focus:ring-4 focus:ring-lime/10 aria-[invalid=true]:border-maple/70 aria-[invalid=true]:focus:ring-maple/10";

function Field({
  id,
  label,
  optional = false,
  error,
  className,
  children,
  aside,
}: {
  id: string;
  label: string;
  optional?: boolean;
  error?: string;
  className?: string;
  children: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <div className={className}>
      <div className="mb-2 flex items-baseline justify-between gap-3">
        <label htmlFor={id} className="text-sm font-semibold text-snow">
          {label} {optional ? <span className="font-normal text-fog">(optional)</span> : <span className="text-lime" aria-hidden="true">*</span>}
        </label>
        {aside}
      </div>
      {children}
      <AnimatePresence initial={false}>
        {error ? (
          <motion.p
            id={`${id}-error`}
            className="mt-2 flex items-center gap-1.5 text-sm text-maple"
            initial={{ opacity: 0, y: -4, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -4, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
            {error}
          </motion.p>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

/**
 * Project enquiry form.
 * - Instant validation in the browser (react-hook-form + zod)
 * - The same zod rules re-checked on the server before saving to Supabase
 * - Works without JavaScript (falls back to a normal form post to the server action)
 * - Honeypot field and minimum fill time to stop spam bots
 */
export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitLead, initialState);
  const [dismissed, setDismissed] = useState<ContactFormState | null>(null);
  const startedAtRef = useRef(0);
  const successHeadingRef = useRef<HTMLHeadingElement>(null);
  const uid = useId();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    control,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    mode: "onTouched",
    defaultValues: { ...emptyValues, ...state.values },
  });

  const message = useWatch({ control, name: "message" }) ?? "";
  const showSuccess = state.status === "success" && state !== dismissed;
  const showError = state.status === "error" && state !== dismissed;

  // Record when the form appeared (bots submit instantly) and pre-select a service from ?service=.
  useEffect(() => {
    startedAtRef.current = Date.now();
    const requested = new URLSearchParams(window.location.search).get("service");
    if (requested && serviceOptions.some((option) => option.value === requested)) {
      setValue("service", requested);
    }
  }, [setValue]);

  useEffect(() => {
    if (showSuccess) successHeadingRef.current?.focus();
  }, [showSuccess]);

  function onValid(_values: ContactInput, event?: BaseSyntheticEvent) {
    const form = event?.target;
    if (!(form instanceof HTMLFormElement)) return;
    const formData = new FormData(form);
    formData.set(STARTED_AT_FIELD, String(startedAtRef.current));
    startTransition(() => formAction(formData));
  }

  function startOver() {
    setDismissed(state);
    reset(emptyValues);
  }

  function errorFor(field: ContactField): string | undefined {
    return errors[field]?.message ?? (showError ? state.fieldErrors?.[field] : undefined);
  }

  function a11y(field: ContactField) {
    const id = `${uid}-${field}`;
    const error = errorFor(field);
    return { id, "aria-invalid": error ? true : undefined, "aria-describedby": error ? `${id}-error` : undefined } as const;
  }

  return (
    <div className="relative isolate overflow-hidden rounded-[2rem] border border-white/10 bg-ink-900/80 p-6 shadow-2xl shadow-black/40 sm:p-10">
      <div aria-hidden="true" className="pointer-events-none absolute -top-32 -right-32 -z-10 h-80 w-80 rounded-full bg-aurora-violet/20 blur-3xl" />

      <AnimatePresence mode="wait" initial={false}>
        {showSuccess ? (
          <motion.div
            key="success"
            className="flex min-h-[520px] flex-col items-center justify-center text-center"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            role="status"
          >
            <div className="relative flex h-24 w-24 items-center justify-center">
              <span className="absolute inset-0 animate-ping rounded-full bg-lime/20 [animation-duration:2s]" aria-hidden="true" />
              <svg viewBox="0 0 52 52" className="relative h-24 w-24" aria-hidden="true">
                <circle cx="26" cy="26" r="25" fill="#c6ff3d" />
                <motion.path
                  d="M15 27 l7 7 l15 -16"
                  fill="none"
                  stroke="#07070c"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
                />
              </svg>
            </div>
            <h2 ref={successHeadingRef} tabIndex={-1} className="mt-8 text-3xl font-bold outline-none sm:text-4xl">
              Message received!
            </h2>
            <p className="mt-4 max-w-md text-lg text-mist">{state.message}</p>
            <p className="mt-2 text-sm text-fog">
              Need something urgently? Email{" "}
              <a href={`mailto:${site.email}`} className="text-lime hover:underline">
                {site.email}
              </a>
              .
            </p>
            <Button variant="secondary" className="mt-8" onClick={startOver}>
              <RotateCcw className="h-4 w-4" aria-hidden="true" /> Send another message
            </Button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            action={formAction}
            onSubmit={(event) => handleSubmit(onValid)(event)}
            noValidate
            className="grid gap-6 sm:grid-cols-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-label="Project enquiry"
          >
            <div className="sm:col-span-2">
              <h2 className="text-2xl font-bold sm:text-3xl">Tell us about your project</h2>
              <p className="mt-2 text-mist">Fields marked * are required. It only takes a minute.</p>
            </div>

            <AnimatePresence initial={false}>
              {showError ? (
                <motion.div
                  role="alert"
                  className="flex gap-3 rounded-2xl border border-maple/40 bg-maple/10 p-4 text-sm text-snow sm:col-span-2"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                >
                  <AlertCircle className="h-5 w-5 shrink-0 text-maple" aria-hidden="true" />
                  <p>{state.message}</p>
                </motion.div>
              ) : null}
            </AnimatePresence>

            <Field id={`${uid}-name`} label="Your name" error={errorFor("name")}>
              <input {...register("name")} {...a11y("name")} type="text" autoComplete="name" placeholder="Jane Tremblay" className={inputClass} />
            </Field>

            <Field id={`${uid}-businessName`} label="Business name" optional error={errorFor("businessName")}>
              <input
                {...register("businessName")}
                {...a11y("businessName")}
                type="text"
                autoComplete="organization"
                placeholder="Tremblay Plumbing Ltd."
                className={inputClass}
              />
            </Field>

            <Field id={`${uid}-email`} label="Email" error={errorFor("email")}>
              <input
                {...register("email")}
                {...a11y("email")}
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="jane@business.ca"
                className={inputClass}
              />
            </Field>

            <Field id={`${uid}-phone`} label="Phone" optional error={errorFor("phone")}>
              <input
                {...register("phone")}
                {...a11y("phone")}
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="519-555-0123"
                className={inputClass}
              />
            </Field>

            <Field id={`${uid}-service`} label="Service interested in" error={errorFor("service")} className="sm:col-span-2">
              <div className="relative">
                <select {...register("service")} {...a11y("service")} className={cn(inputClass, "cursor-pointer appearance-none pr-12")}>
                  <option value="" disabled>
                    Choose a service…
                  </option>
                  {serviceOptions.map((option) => (
                    <option key={option.value} value={option.value} className="bg-ink-900">
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute top-1/2 right-4 h-5 w-5 -translate-y-1/2 text-fog" aria-hidden="true" />
              </div>
            </Field>

            <Field
              id={`${uid}-message`}
              label="Message"
              error={errorFor("message")}
              className="sm:col-span-2"
              aside={
                <span className={cn("text-xs tabular-nums", message.length > MESSAGE_MAX ? "text-maple" : "text-fog")} aria-hidden="true">
                  {message.length.toLocaleString("en-CA")}/{MESSAGE_MAX.toLocaleString("en-CA")}
                </span>
              }
            >
              <textarea
                {...register("message")}
                {...a11y("message")}
                rows={6}
                placeholder="What do you want to build or fix? Any deadlines, links or budget range help us give you a better answer."
                className={cn(inputClass, "resize-y leading-relaxed")}
              />
            </Field>

            {/* Spam protection: real visitors never see or fill these. */}
            <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
              <label htmlFor={`${uid}-${HONEYPOT_FIELD}`}>Website</label>
              <input id={`${uid}-${HONEYPOT_FIELD}`} type="text" name={HONEYPOT_FIELD} tabIndex={-1} autoComplete="off" defaultValue="" />
            </div>

            <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-fog">
                By sending, you agree to our{" "}
                <Link href="/privacy" className="text-mist underline-offset-4 hover:text-lime hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
              <Button type="submit" size="lg" disabled={pending} className="w-full sm:w-auto">
                {pending ? (
                  <>
                    <LoaderCircle className="h-5 w-5 animate-spin" aria-hidden="true" /> Sending…
                  </>
                ) : (
                  <>
                    Send message <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                  </>
                )}
              </Button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
