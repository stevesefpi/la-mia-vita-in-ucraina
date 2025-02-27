"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function EmailConfirmation() {
  const router = useRouter();

  useEffect(() => {
    async function handleEmailConfirmation() {
      const { data, error } = await supabase.auth.getSession();

      if (error) {
        console.error("Error fetching session:", error.message);
        return;
      }

      if (data?.session) {
        // ✅ Email confirmed, redirect to dashboard
        router.push("/admin");
      } else {
        console.error("No session found. Email confirmation failed.");
      }
    }

    handleEmailConfirmation();
  }, [router]);

  return <p>Confirming your email... Please wait.</p>;
}
