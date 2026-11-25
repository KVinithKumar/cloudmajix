import "server-only";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/** Shape of a row inserted into the `leads` table (see supabase/schema.sql). */
export type LeadInsert = {
  name: string;
  business_name: string | null;
  email: string;
  phone: string | null;
  service: string;
  message: string;
};

let client: SupabaseClient | null = null;

/**
 * Server-side Supabase client, created once and reused.
 * Keys come only from environment variables (.env.local locally, Vercel settings in production).
 * Returns null when the variables are missing so callers can show a friendly error.
 */
export function getSupabase(): SupabaseClient | null {
  if (client) return client;
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anonKey) return null;
  client = createClient(url, anonKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  return client;
}
