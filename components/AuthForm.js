"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useActionState } from "react";
import { useRouter } from "next/navigation";
import { signup, login } from "@/actions/auth-actions";

import styles from "./AuthForm.module.css";

export default function AuthForm({ mode = "signup" }) {
  const router = useRouter();
  const [isSignup, setIsSignup] = useState(mode === "signup");
  const action = isSignup ? signup : login;
  const [formState, formAction] = useActionState(action, {});

  useEffect(() => {
    if (formState.success) {
      console.log("Redirecting user to /admin...");
      router.push("/admin");
    }
  }, [formState.success, router]);


  return (
    <div className={styles.container}>
      <form className={styles.authForm} action={formAction}>
        <h2>{isSignup ? "Create an Account" : "Login to Your Account"}</h2>

        <p>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
        </p>
        <p>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" required />
        </p>

        {formState.errors && (
          <ul className={styles.formErrors}>
            {Object.keys(formState.errors).map((error) => (
              <li key={error}>{formState.errors[error]}</li>
            ))}
          </ul>
        )}

        <p>
          <button type="submit">
            {isSignup ? "Create Account" : "Login"}
          </button>
        </p>

        <p>
          <button
            type="button"
            className={styles.switchButton}
            onClick={() => setIsSignup((prev) => !prev)}
          >
            {isSignup
              ? "Already have an account? Log in"
              : "Don't have an account? Sign up"}
          </button>
        </p>
      </form>
    </div>
  );
}
