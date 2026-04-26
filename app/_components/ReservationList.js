"use client";

import { useState, useTransition } from "react";
import { deleteReservation } from "../_lib/actions";
import ReservationCard from "./ReservationCard";

function ReservationList({ bookings }) {
  console.log("Bookings in ReservationList: ", bookings);
  const [isPending, startTransition] = useTransition();
  const [deletedIds, setDeletedIds] = useState([]);

  async function handleDelete(bookingId) {
    setDeletedIds((prev) => [...prev, bookingId]);

    startTransition(async () => {
      try {
        await deleteReservation(bookingId);
        window.location.href = "/account/reservations";
      } catch (error) {
        console.error("Failed to delete reservation: ", error);
        setDeletedIds((prev) => prev.filter((id) => id !== bookingId));
        alert("Failed to delete reservation. Please try again.");
      }
    });
  }

  const optimisticBookings = bookings.filter(
    (booking) => !deletedIds.includes(booking?.id),
  );

  return (
    <ul className="space-y-6">
      {optimisticBookings?.map((booking) => (
        <ReservationCard
          key={booking?.id}
          booking={booking}
          onDelete={handleDelete}
        />
      ))}
    </ul>
  );
}

export default ReservationList;
