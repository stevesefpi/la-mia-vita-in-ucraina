import { createBrowserClient } from "@supabase/ssr";

const supabaseClient = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_KEY
);
export function createClient() {
  return supabaseClient;
}
