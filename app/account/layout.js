import SideNavigation from "../_components/SideNavigation";

export default function layout({ children }) {
  return (
    <div className="grid xl:grid-cols-[16rem_1fr] grid-cols-[auto] gap-5 w-full xl:h-full xl:gap-12">
      <SideNavigation />
      <div className="py-1">{children}</div>
    </div>
  );
}
