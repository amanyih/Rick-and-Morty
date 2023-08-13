import NavItem from "./navitem";
import { Route } from "../../constants";

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
    <nav>
      <ul className="flex">
        {Links.map((link) => (
          <NavItem to={link.to} title={link.title} />
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
