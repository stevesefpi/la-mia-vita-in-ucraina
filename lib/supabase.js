import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

// ✅ Enable cookie-based auth
export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: true, // Stores session in cookies
    autoRefreshToken: true, // Refreshes tokens automatically
    detectSessionInUrl: true, // Avoids conflicts in Next.js
    storage: typeof window !== "undefined" ? localStorage : undefined, // Ensures session is stored correctly in client
  },
});
