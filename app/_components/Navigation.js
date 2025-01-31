import Link from "next/link";
import { auth } from "../_lib/auth";
import Image from "next/image";

export default async function Navigation() {
  const session = await auth();

  return (
    <nav className="z-10 xl:text-xl text-xs w-full xl:w-max">
      <ul className="flex xl:gap-16 gap-2 items-center w-full xl:w-max self-end justify-between">
        <li>
          <Link
            href="/cabins"
            className="hover:text-accent-400 transition-colors"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          {session?.user?.image ? (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors flex items-center xl:gap-4 gap-2 w-full xl:w-max"
            >
              <Image
                src={session.user.image}
                alt="user image"
                className="h-[16px] w-[16px] xl:w-[32px] xl:h-[32px] rounded-full"
                width={32}
                height={32}
                referrerPolicy="no-referrer"
              />
              <span>Guest area</span>
            </Link>
          ) : (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors"
            >
              Guest area
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
