"use client";

import Image from "next/image";
import { useState } from "react";
import SubmitButton from "./SubmitButton";
import { updateProfile } from "../_lib/actions";
import { useRouter } from "next/navigation";

function UpdateProfileForm({ guest, children }) {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState("");
  const { fullName, email, nationalID, nationality, countryFlag } = guest;
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);
    setError("");

    try {
      const formData = new FormData(e.currentTarget);

      const result = await updateProfile(formData);

      if (result?.error) {
        setError(result.error);
        setIsPending(false);
        return;
      }

      window.location.href = "/account/profile";
    } catch (error) {
      console.error("Critical error: ", error);
      setError("An unexpected error occurred. Please try again.");
      setIsPending(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-primary-900 xl:py-8 xl:px-12 py-4 px-6 text-lg flex gap-6 flex-col"
    >
      <div className="space-y-2">
        <label>Full name</label>
        <input
          disabled
          defaultValue={fullName}
          name="fullName"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <label>Email address</label>
        <input
          disabled
          defaultValue={email}
          name="email"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor="nationality">Where are you from?</label>
        </div>

        {children}
      </div>

      <div className="space-y-2">
        <label htmlFor="nationalId">National ID number</label>
        <input
          defaultValue={nationalID}
          name="nationalId"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
        />
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <div className="flex justify-end items-center gap-6">
        <SubmitButton pending={isPending} pendingLabel="Updating...">
          Update
        </SubmitButton>
      </div>
    </form>
  );
}

export default UpdateProfileForm;
