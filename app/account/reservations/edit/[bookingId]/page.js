import ReservationEdit from "@/app/_components/ReservationEdit";
import { getBooking, getCabin } from "@/app/_lib/data-service";

export const runtime = "edge";

export const dynamic = "force-dynamic";

export default async function Page({ params }) {
  const { bookingId } = await params;
  const { numGuests, observations, cabinId } = await getBooking(bookingId);

  const { maxCapacity } = await getCabin(cabinId);

  return (
    <div>
      <h2 className="font-semibold xl:text-2xl text-xl text-accent-400 mb-7">
        Edit Reservation #{bookingId}
      </h2>

      <ReservationEdit
        numGuests={numGuests}
        observations={observations}
        maxCapacity={maxCapacity}
        bookingId={bookingId}
      />
    </div>
  );
}
