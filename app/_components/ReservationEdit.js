"use client";

import { useState } from "react";
import SubmitButton from "./SubmitButton";
import { updateReservation } from "@/app/_lib/actions";

function ReservationEdit({ numGuests, observations, maxCapacity, bookingId }) {
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);
    const formData = new FormData(e.target);
    const result = await updateReservation(formData);
    if (result?.error) {
      alert(result.error);
    }
    window.location.href = "/account/reservations";
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-primary-900 xl:py-8 xl:px-12 py-4 px-6 text-lg flex gap-6 flex-col"
    >
      <input type="hidden" name="bookingId" value={bookingId} />

      <div className="space-y-2">
        <label htmlFor="numGuests">How many guests ?</label>
        <select
          name="numGuests"
          id="numGuests"
          defaultValue={numGuests}
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          required
        >
          <option value="" key="">
            Select number of guests...
          </option>
          {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
            <option value={x} key={x}>
              {x} {x === 1 ? "guest" : "guests"}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="observations">
          Anything we should know about your stay?
        </label>
        <textarea
          name="observations"
          defaultValue={observations}
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
        />
      </div>

      <div className="flex justify-end items-center gap-6">
        <SubmitButton pending={isPending} pendingLabel="Updating">
          Update reservation
        </SubmitButton>
      </div>
    </form>
  );
}

export default ReservationEdit;
