import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

// Enabling cookie-based auth
export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: true, 
    autoRefreshToken: true, 
    detectSessionInUrl: true, 
    storage: typeof window !== "undefined" ? localStorage : undefined, 
  },
});
