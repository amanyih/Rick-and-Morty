import logo from "../Assests/logo1.png";
import { NavLink, Outlet, Link } from "react-router-dom";
const RootLayout = () => {
  return (
    <div className=" flex flex-col gap-24">
      <header className="w-full z-10 h-1/5">
        <nav className="flex justify-end items-center gap-36 text-white flex-shrink-0 text-2xl uppercase tracking-wider font-semibold p-6">
          <Link to="/" className="mr-auto max-w-xs">
            <img src={logo} alt="" />
          </Link>
          <NavLink to="/" className="">
            Home
          </NavLink>
          <NavLink to="characters">Characters</NavLink>
          <NavLink to="episodes">Episodes</NavLink>
          <NavLink to="locations">Locations</NavLink>
        </nav>
      </header>
      <main className="">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
