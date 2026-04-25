"use client";

import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import { signOut } from "next-auth/react";

function SignOutButton() {
  function handleSubmit(e) {
    e.preventDefault();
    signOut({ redirect: true, redirectTo: "/" });
  }

  return (
    <form onSubmit={handleSubmit}>
      <button className="py-3 xl:px-5 px-3 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center xl:gap-4 gap-2 font-semibold text-primary-200 w-full">
        <ArrowRightOnRectangleIcon className="h-5 w-5 text-primary-600" />
        <span>Sign out</span>
      </button>
    </form>
  );
}

export default SignOutButton;
