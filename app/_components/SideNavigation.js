import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import SignOutButton from "./SignOutButton";
import Link from "next/link";

const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: <HomeIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Reservations",
    href: "/account/reservations",
    icon: <CalendarDaysIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Guest profile",
    href: "/account/profile",
    icon: <UserIcon className="h-5 w-5 text-primary-600" />,
  },
];

function SideNavigation() {
  return (
    <nav className="xl:border-r border-b border-primary-900">
      <ul className="flex xl:flex-col gap-1 w-full xl:h-full xl:text-lg text-[9px] justify-evenly">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              className={`py-3 xl:px-5 px-3 w-max hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center justify-center xl:gap-4 gap-2 font-semibold text-primary-200`}
              href={link.href}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          </li>
        ))}

        <li className="xl:mt-auto w-max">
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigation;
