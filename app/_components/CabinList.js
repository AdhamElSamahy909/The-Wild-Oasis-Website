import { unstable_noStore as noStore } from "next/cache";

import CabinCard from "@/app/_components/CabinCard";
import { getCabins } from "../_lib/data-service";

async function CabinList({ filter }) {
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
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {displayedCabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}

export default CabinList;