"use client";

import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { format, formatDistance, isPast, isToday, parseISO } from "date-fns";
import DeleteReservation from "./DeleteReservation";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Ellipsis } from "lucide-react";

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  }).replace("about ", "");

function ReservationCard({ booking, onDelete }) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [showMenu, setShowMenu] = useState(false);
  const [userLocale, setUserLocale] = useState(undefined);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    document.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const locale = navigator.language || navigator.languages[0];
    setUserLocale(locale);
  }, []);

  const handleShowMenu = () => {
    setShowMenu((is) => !is);
  };

  const {
    id,
    guestId,
    startDate,
    endDate,
    numNights,
    totalPrice,
    numGuests,
    status,
    created_at,
    cabins: { name, image },
  } = booking;

  const formattedDate = new Date(created_at).toLocaleString(userLocale, {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric", // Added options
    minute: "numeric", // Added options
    hour12: true, // Added options
  });

  return (
    <div className="flex flex-col xl:flex-row border border-primary-800 relative">
      <div className="relative xl:h-32 h-44 aspect-square mb-3 xl:mb-0">
        <Image
          src={image}
          alt={`Cabin ${name}`}
          fill
          className="object-cover xl:border-r border-primary-800"
        />
      </div>

      <div className="flex-grow px-6 py-3 flex flex-col gap-5 xl:gap-0">
        <div className="flex items-center justify-between">
          <h3 className="xl:text-xl text-base font-semibold">
            {numNights} nights in Cabin {name}
          </h3>
          {isPast(new Date(startDate)) ? (
            <span className="bg-yellow-800 text-yellow-200 h-7 px-3 uppercase text-xs font-bold flex items-center rounded-sm">
              past
            </span>
          ) : (
            <span className="bg-green-800 text-green-200 h-7 px-3 uppercase text-xs font-bold flex items-center rounded-sm">
              upcoming
            </span>
          )}
        </div>

        <p className="xl:text-lg text-base text-primary-300">
          {format(new Date(startDate), "EEE, MMM dd yyyy")} (
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}
          ) &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
        </p>

        <div className="flex xl:gap-5 gap-2 mt-auto items-baseline">
          <p className="xl:text-xl text-base font-semibold text-accent-400">
            ${totalPrice}
          </p>
          <p className="text-primary-300">&bull;</p>
          <p className="xl:text-lg text-base text-primary-300">
            {numGuests} guest{numGuests > 1 && "s"}
          </p>
          <p className="ml-auto text-sm text-primary-400">
            {/* Booked {format(new Date(created_at), "EEE, MMM dd yyyy, p")} */}
            Booked {formattedDate}
          </p>
        </div>
      </div>

      {screenWidth > 430 ? (
        <div className="flex flex-col xl:border-l border-primary-800 w-[100px]">
          <Link
            href={`/account/reservations/edit/${id}`}
            className="group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 border-b border-primary-800 flex-grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900"
          >
            <PencilSquareIcon className="h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
            <span className="mt-1">Edit</span>
          </Link>
          <DeleteReservation bookingId={id} onDelete={onDelete} />
        </div>
      ) : (
        <>
          <button
            className="absolute top-[1rem] right-[1rem]"
            onClick={handleShowMenu}
          >
            <Ellipsis className="bg-slate-500 bg-opacity-40 rounded-full h-7 w-7 p-1 flex items-center justify-center" />
          </button>

          {showMenu && (
            <div className="flex bg-slate-900 rounded-lg flex-col absolute top-[3rem] right-[1rem]">
              <Link
                href={`/account/reservations/edit/${id}`}
                className="group flex items-center rounded-tl-lg rounded-tr-lg gap-2 p-3 uppercase text-xs font-bold text-primary-300 border-b border-primary-800 flex-grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900"
              >
                <PencilSquareIcon className="h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
                <span className="mt-1">Edit</span>
              </Link>

              <DeleteReservation
                bookingId={id}
                onDelete={onDelete}
                showMenu={showMenu}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default ReservationCard;
