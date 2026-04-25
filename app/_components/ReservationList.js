"use client";

import { useOptimistic, useTransition } from "react";
import { deleteReservation } from "../_lib/actions";
import ReservationCard from "./ReservationCard";

function ReservationList({ bookings }) {
  console.log("Bookings in ReservationList: ", bookings);
  const [isPending, startTransition] = useTransition();
  const [optimisticBookings, optimisticDelete] = useOptimistic(
    bookings,
    (curBookings, bookingId) => {
      return curBookings.filter((bookings) => bookings?.id !== bookingId);
    },
  );

  async function handleDelete(bookingId) {
    startTransition(async () => {
      optimisticDelete(bookingId);
      await deleteReservation(bookingId);
      window.location.href = "/account/reservations";
    });
    // optimisticDelete(bookingId);
    // await deleteReservation(bookingId);
    // window.location.href = "/account/reservations";
  }

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
