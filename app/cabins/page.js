import Filter from "@/app/_components/Filter";
import { Suspense } from "react";
import Spinner from "../_components/Spinner";
import CabinList from "@/app/_components/CabinList";
import ReservationReminder from "@/app/_components/ReservationReminder";

export const metadata = {
  title: "Cabins",
};

export default async function Page({ searchParams }) {
  const filter = (await searchParams?.capacity) ?? "all";
  // const filter = capacity ?? "all";

  return (
    <div className="mt-9 xl:mt-0">
      <h1 className="text-2xl xl:text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>

      <p className="text-primary-200 text-sm xl:text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>

      <div className="flex justify-center xl:justify-end mb-8">
        <Filter />
      </div>

      <Suspense fallback={<Spinner />} key={filter}>
        <CabinList filter={filter} />
        <ReservationReminder />
      </Suspense>
    </div>
  );
}
