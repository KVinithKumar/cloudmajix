-- CloudMajix: contact-form leads table
-- How to run: Supabase dashboard -> SQL Editor -> New query -> paste this whole file -> Run.
-- Safe to run more than once.

create table if not exists public.leads (
  id            uuid        primary key default gen_random_uuid(),
  name          text        not null check (char_length(name) between 2 and 100),
  business_name text                 check (business_name is null or char_length(business_name) <= 120),
  email         text        not null check (char_length(email) <= 254 and email ~* '^[^@[:space:]]+@[^@[:space:]]+\.[^@[:space:]]+$'),
  phone         text                 check (phone is null or char_length(phone) <= 30),
  service       text        not null check (char_length(service) between 1 and 80),
  message       text        not null check (char_length(message) between 10 and 5000),
  created_at    timestamptz not null default now()
);

comment on table public.leads is 'Enquiries submitted through the cloudmajix.ca contact form.';

create index if not exists leads_created_at_idx on public.leads (created_at desc);

-- Security: turn on Row Level Security so the public (anon) key can ONLY add new leads.
-- Nobody can read, change or delete leads with the public key. You view them in the
-- Supabase dashboard (Table Editor -> leads), which uses your admin access.
alter table public.leads enable row level security;

revoke all on table public.leads from anon, authenticated;
grant insert on table public.leads to anon;

drop policy if exists "Website visitors can submit leads" on public.leads;
create policy "Website visitors can submit leads"
  on public.leads
  for insert
  to anon
  with check (true);
