import { unstable_noStore as noStore } from "next/cache";
import { getCabins } from "@/app/_lib/data-service";
import CabinCard from "@/app/_components/CabinCard";

export default async function CabinList({ filter }) {
  noStore();
  const cabins = await getCabins();

  if (!cabins.length) return null;

  let displayedCabins =
    filter === "all"
      ? cabins
      : filter === "small"
      ? cabins.filter((cabin) => cabin.maxCapacity <= 3)
      : filter === "medium"
      ? cabins.filter((c) => c.maxCapacity >= 4 && c.maxCapacity <= 7)
      : filter === "large"
      ? cabins.filter((c) => c.maxCapacity >= 8)
      : null;

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14 w-[clac(100%-20rem)]">
      {displayedCabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}
