"use client";

import Link from "next/link";
import SubmitButton from "../_components/SubmitButton";
import { useState } from "react";
import { signIn } from "next-auth/react";

export const runtime = "edge";

export default function Page() {
  const [error, setError] = useState("");
  const [isPending, setIsPending] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsPending(true);
    setError("");

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      console.log("Login error: ", result.error);
      setError("Invalid email or password");
      setIsPending(false);
    } else if (result?.ok) {
      window.location.href = "/account";
    }
  }

  return (
    <div className="flex flex-col gap-10 mt-10 items-center">
      <h2 className="xl:text-3xl text-xl font-semibold">
        Sign in to your account
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-primary-900 border border-primary-800 xl:py-8 xl:px-12 py-4 px-6 text-lg flex gap-6 flex-col w-full max-w-lg shadow-sm rounded-md"
      >
        <div className="space-y-2">
          <label>Email address</label>
          <input
            name="email"
            type="email"
            required
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm focus:outline-none focus:ring-2 focus:ring-accent-500"
          />
        </div>

        <div className="space-y-2">
          <label>Password</label>
          <input
            name="password"
            type="password"
            required
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm focus:outline-none focus:ring-2 focus:ring-accent-500"
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <div className="flex flex-col xl:flex-row gap-6 justify-between items-center mt-6">
          <span className="text-primary-300 text-base">
            Don&apos;`t have an account?{" "}
            <Link
              href="/signup"
              className="text-accent-500 hover:text-accent-400 font-semibold"
            >
              Sign up
            </Link>
          </span>
          <SubmitButton pending={isPending} pendingLabel="Signing in...">
            Sign in
          </SubmitButton>
        </div>
      </form>
    </div>
  );
}
