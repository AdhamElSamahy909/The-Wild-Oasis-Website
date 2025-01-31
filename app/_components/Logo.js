import Image from "next/image";
import logo from "@/public/logo.png";
import Link from "next/link";

function Logo() {
  return (
    <Link
      href="/"
      className="flex w-full xl:w-max items-center xl:gap-4 gap-2 z-10"
    >
      <Image
        src={logo}
        height="60"
        width="60"
        quality={100}
        alt="The Wild Oasis logo"
        className="w-[30px] xl:w-[60px] h-[30px] xl:h-[60px]"
      />
      <span className="xl:text-xl text-xs font-semibold text-primary-100">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
