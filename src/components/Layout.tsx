import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
  const { pathname } = useLocation();

  return (
    <>
      <Header />
      {/* For all routes except home, start content below the centered logo */}
      {pathname === "/" ? (
        <Outlet />
      ) : (
        <div className="pt-36 md:pt-56 page-bg-dark-gradient">
          <Outlet />
        </div>
      )}
    </>
  );
}
