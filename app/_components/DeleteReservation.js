"use client";

import { TrashIcon } from "@heroicons/react/24/solid";

function DeleteReservation({ bookingId, onDelete, showMenu }) {
  console.log("DeleteReservation rendered with bookingId: ", bookingId);

  function handleDelete() {
    if (confirm("Are you sure you want to delete this reservation ?"))
      onDelete(bookingId);
  }

  return (
    <button
      onClick={handleDelete}
      className={`${
        showMenu ? "p-3 rounded-bl-lg rounded-br-lg" : ""
      } group flex items-center justify-center gap-2 uppercase text-xs font-bold text-primary-300 flex-grow hover:bg-accent-600 transition-colors hover:text-primary-900`}
    >
      <TrashIcon className="h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
      <span className="mt-1">Delete</span>
    </button>
  );
}

export default DeleteReservation;
