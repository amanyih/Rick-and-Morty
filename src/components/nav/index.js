import NavItem from "./navitem";
import { Route } from "../../constants";
import Logo from "../logo";
import ThemeToggle from "../theme_toggle";

const Links = [
  {
    to: Route.HOME,
    title: "Home",
  },
  {
    to: Route.CHARACTER,
    title: "Character",
  },
  {
    to: Route.LOCATION,
    title: "Location",
  },
  {
    to: Route.EPISODE,
    title: "Episode",
  },
];

//collapsiple responsive navbar, in mobile view it will be collapsed and in desktop view it will be expanded

const NavBar = () => {
  return (
    <nav className=" w-full flex justify-between items-center py-5 px-10">
      <Logo />
      <div className=" flex justify-between items-center">
        <ul className="flex justify-between items-center">
          {Links.map((link) => (
            <NavItem to={link.to} title={link.title} />
          ))}
        </ul>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default NavBar;
