import Link from "../Link/link";
import logo from "../../../Assests/logo1.png";

const NavBar = () => {
  return (
    <div className=" uppercase text-xs sticky top-0 l tracking-widest">
      <ul className="flex justify-evenly align-middle  text-white pt-5 px-3 text-base font-extrabold font-mono">
        <li>
          <Link>Home</Link>
        </li>
        <li>
          <Link>Characters</Link>
        </li>
        <li>
          <Link>Episodes</Link>
        </li>
        <li>
          <Link>Locations</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
