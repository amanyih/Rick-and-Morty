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

const NavBar = () => {
  return (
    <nav className="flex justify-between w-full my-5">
      <Logo />
      <div className="flex w-2/3">
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
