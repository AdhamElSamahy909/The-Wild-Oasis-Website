import SideNavigation from "../_components/SideNavigation";

export default function layout({ children }) {
  return (
    <div className="grid xl:grid-cols-[16rem_minmax(0,1fr)] grid-cols-1 gap-5 w-full xl:h-full xl:gap-12">
      {/* <div className="grid xl:grid-cols-[16rem_minmax(0,1fr)] grid-cols-1 gap-5 w-full xl:h-full xl:gap-12"> */}
      <SideNavigation />
      <div className="py-1">{children}</div>
    </div>
  );
}
