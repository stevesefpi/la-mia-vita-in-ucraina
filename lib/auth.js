import { supabase } from "@/lib/supabase";

// Get current user session from Supabase
export async function getUserSession() {
  const { data, error } = await supabase.auth.getSession();

  if (error || !data?.session) {
    return null; 
  }

  return data.session.user; 
}
