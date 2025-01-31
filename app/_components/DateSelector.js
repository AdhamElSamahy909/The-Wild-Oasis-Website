"use client";

import {
  differenceInDays,
  isPast,
  isSameDay,
  isWithinInterval,
} from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

import { useReservation } from "./ReservationContext";

function isAlreadyBooked(range, datesArr) {
  return range?.from && range?.to
    ? datesArr.some((date) =>
        isWithinInterval(date, { start: range.from, end: range.to })
      )
    : null;
}

function DateSelector({ settings, cabin, bookedDates }) {
  const { range, setRange, resetRange } = useReservation();

  const displayRange = isAlreadyBooked(range, bookedDates) ? {} : range;

  const { regularPrice, discount } = cabin;
  const numNights = differenceInDays(displayRange?.to, displayRange?.from);
  const cabinPrice = (regularPrice - discount) * numNights;

  // SETTINGS
  const { maxBookingLength, minBookingLength } = settings;

  return (
    <div className="flex flex-col justify-between col-span-2 xl:col-span-1">
      <DayPicker
        className="py-12 place-self-center w-[85%] xl:w-full xl:flex xl:justify-center"
        captionLayout="dropdown"
        mode="range"
        selected={displayRange}
        onSelect={setRange}
        disabled={[
          { before: new Date() },
          ...bookedDates.map((date) => new Date(date)),
        ]}
        modifiers={{
          range: displayRange,
        }}
        numberOfMonths={2}
        fromDate={new Date()}
        toDate={new Date(new Date().getFullYear() + 5, 11, 31)}
        defaultMonth={new Date()}
        min={minBookingLength + 1}
        max={maxBookingLength}
      />

      <div className="flex items-center justify-between mt-8 xl:mt-0 px-8 bg-accent-500 text-primary-800 h-[72px]">
        <div className="flex items-baseline gap-6">
          <p className="flex gap-2 items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-lg xl:text-2xl">
                  ${regularPrice - discount}
                </span>
                <span className="line-through font-semibold text-primary-700">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-lg xl:text-2xl">${regularPrice}</span>
            )}
            <span className="">/night</span>
          </p>
          {numNights ? (
            <>
              <p className="bg-accent-600 px-3 py-2 text-lg xl:text-2xl">
                <span>&times;</span> <span>{numNights}</span>
              </p>
              <p>
                <span className="text-base xl:text-lg font-bold uppercase">
                  Total
                </span>{" "}
                <span className="text-lg xl:text-2xl font-semibold">
                  ${cabinPrice}
                </span>
              </p>
            </>
          ) : null}
        </div>

        {range?.from || range?.to ? (
          <button
            className="border border-primary-800 py-2 px-4 text-sm font-semibold"
            onClick={() => resetRange()}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;
