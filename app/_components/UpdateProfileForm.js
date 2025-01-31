"use client";

import Image from "next/image";
import { useState } from "react";
import SubmitButton from "./SubmitButton";
import { updateProfile } from "../_lib/actions";

function UpdateProfileForm({ guest, children }) {
  const [count, setCount] = useState();
  const { fullName, email, nationalID, nationality, countryFlag } = guest;

  return (
    <form
      action={updateProfile}
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
          name="emial"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor="nationality">Where are you from?</label>
          <Image
            src={countryFlag}
            width={32}
            height={32}
            alt="Country flag"
            className="h-5 rounded-sm"
          />
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

      <div className="flex justify-end items-center gap-6">
        <SubmitButton pendingLabel="Updating...">Update</SubmitButton>
      </div>
    </form>
  );
}

export default UpdateProfileForm;
