import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";

function Header() {
  return (
    <header className="border-b border-primary-900 xl:px-8 py-5 px-3">
      <div className="flex justify-between items-center max-w-7xl xl:mx-auto mx-0">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
