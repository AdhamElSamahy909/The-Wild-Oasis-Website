"use client";

import Link from "next/link";
import SubmitButton from "../_components/SubmitButton";
import { signUpAction } from "../_lib/actions";
import { useActionState, useEffect } from "react";

export const runtime = "edge";

export default function Page() {
  const [state, formAction] = useActionState(signUpAction, undefined);

  useEffect(() => {
    if (state?.success) window.location.href = "/account";
  }, [state]);

  return (
    <div className="flex flex-col gap-10 mt-10 items-center">
      <h2 className="xl:text-3xl text-xl font-semibold">
        Create a new account
      </h2>

      <form
        action={formAction}
        className="bg-primary-900 border border-primary-800 xl:py-8 xl:px-12 py-4 px-6 text-lg flex gap-6 flex-col w-full max-w-lg shadow-sm rounded-md"
      >
        <div className="space-y-2">
          <label>Full name</label>
          <input
            name="fullName"
            type="text"
            required
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm focus:outline-none focus:ring-2 focus:ring-accent-500"
          />
        </div>

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

        {state?.error && <p className="text-red-500 text-sm">{state.error}</p>}

        <div className="flex flex-col xl:flex-row gap-6 justify-between items-center mt-6">
          <span className="text-primary-300 text-base">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-accent-500 hover:text-accent-400 font-semibold"
            >
              Sign in
            </Link>
          </span>
          <SubmitButton pendingLabel="Creating account...">
            Sign up
          </SubmitButton>
        </div>
      </form>
    </div>
  );
}
