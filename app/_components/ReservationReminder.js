"use client";

import { XMarkIcon } from "@heroicons/react/24/solid";
import { format } from "date-fns";
import { useReservation } from "./ReservationContext";

function ReservationReminder() {
  const { range, resetRange } = useReservation();

  function handleClick() {
    resetRange();
  }
  // CHANGE
  // const range = { from: null, to: null };

  if (!range.from || !range.to) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[85%] xl:w-max px-3 py-2 xl:py-5 xl:px-8 rounded-lg xl:rounded-full bg-accent-500 text-primary-800 font-semibold shadow-xl shadow-slate-900 flex gap-8 items-center">
      <p>
        <span>👋</span> Don&apos;t forget to reserve your dates <br /> from{" "}
        {format(new Date(range.from), "MMM dd yyyy")} to{" "}
        {format(new Date(range.to), "MMM dd yyyy")}
      </p>
      <button
        className="rounded-full p-1 hover:bg-accent-600 transition-all"
        onClick={resetRange}
      >
        <XMarkIcon className="h-5 w-5" />
      </button>
    </div>
  );
}

export default ReservationReminder;
