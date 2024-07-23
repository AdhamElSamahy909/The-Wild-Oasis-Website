import Link from "next/link";
import Image from "next/image";
import bg from "@/public/bg.png";

export default function Home() {
  return (
    <main className="mt-24">
      <Image
        src={bg}
        fill
        placeholder="blur"
        className="object-cover object-top"
        alt="Mountains and forests with two cabins"
      />

      <div className="relative z-10 text-center">
        <h1 className="text-8xl text-primary-50 mb-10 tracking-tight font-normal">
          Welcome to paradise.
        </h1>

        <Link
          href="/cabins"
          className="bg-accent-500 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
        >
          Explore luxury cabins
        </Link>
        {/* Behind the scenes, this will prefetch all the routes that are linked on a certain page, even though
        that only happens in production. Also, each page is downloaded seperately as a seperate chunk
        which will improve performance. Finally, each page that is visited in the browser will be cached in 
        the browser as well. */}
      </div>
    </main>
  );
}
