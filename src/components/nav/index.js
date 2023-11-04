import NavItem from "./navitem";
import { Route } from "../../constants";
import Logo from "../logo";
import ThemeToggle from "../theme_toggle";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrFormClose } from "react-icons/gr";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { VscListFlat, VscClose } from "react-icons/vsc";

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
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [hamButton, setHamButton] = useState(
    <VscListFlat className="text-3xl md:hidden" />
  );
  const toggleMenu = (e) => {
    const menu = document.getElementById("menu");
    if (isMenuOpen) {
      menu.classList.remove("top-[-400px]");
      menu.classList.add("top-30");
      menu.classList.remove("opacity-0");
      menu.classList.add("opacity-100");
      setHamButton(<VscClose className="text-3xl md:hidden" />);
    } else {
      menu.classList.add("top-[-400px]");
      menu.classList.remove("top-30");
      menu.classList.add("opacity-0");
      menu.classList.remove("opacity-100");
      setHamButton(<VscListFlat className="text-3xl md:hidden" />);
    }
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav
      className="w-full p-5 md:flex md:items-center md:justify-between
    text-2xl font-bold
    "
    >
      <div className="flex justify-between items-center">
        <span>
          <Logo />
        </span>
        <span className="md:hidden block" onClick={toggleMenu}>
          {hamButton}
        </span>
      </div>
      <ul
        id="menu"
        className="md:flex md:items-center md:gap-2 md:static absolute
        bg-white dark:bg-bodyColor dark:bg-opacity-90 bg-opacity-90
       w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 opacity-0 md:opacity-100 top-[-400px] transition-all duration-300 ease-in"
      >
        {Links.map((link) => {
          return (
            <NavItem
              key={link.to}
              to={link.to}
              title={link.title}
              onClick={toggleMenu}
            />
          );
        })}

        <ThemeToggle />
      </ul>
    </nav>
  );
};

export default NavBar;
