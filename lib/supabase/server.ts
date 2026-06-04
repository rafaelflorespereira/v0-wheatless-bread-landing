import "server-only"
import { createClient } from "@supabase/supabase-js"

/**
 * Server-side Supabase client for read-only, public data (e.g. the product
 * catalog). It uses the publishable (anon) key, so reads must be allowed by an
 * RLS policy on the table — see the note at the bottom of this file.
 */
export function createSupabaseServerClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY

  if (!url || !key) {
    throw new Error(
      "Missing Supabase env vars: NEXT_PUBLIC_SUPABASE_URL and/or NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY",
    )
  }

  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  })
}

/*
 * RLS reminder
 * ------------
 * For the publishable key to read the products table, add a SELECT policy:
 *
 *   alter table products enable row level security;
 *
 *   create policy "Public can read available products"
 *     on products for select
 *     to anon, authenticated
 *     using (is_available is true);
 *
 * To query with elevated privileges (bypassing RLS) use SUPABASE_SERVICE_ROLE_KEY
 * instead — but never expose that key to the browser or prefix it NEXT_PUBLIC_.
 */
