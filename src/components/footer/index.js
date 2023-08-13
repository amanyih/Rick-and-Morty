import { Route } from "../../constants";
import { Link } from "react-router-dom";
import { BsTelegram, BsGithub, BsInstagram } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="border-t-2 pt-5">
      <div className="flex justify-between items-start">
        <Link to={Route.HOME} className="text-4xl">
          Rick and Morty
        </Link>
        <div className="text-2xl flex w-28 justify-evenly">
          <BsTelegram className="hover:cursor-pointer " />
          <BsGithub className="hover:cursor-pointer " />
          <BsInstagram className="hover:cursor-pointer " />
        </div>
      </div>
      <h1>2023</h1>
    </div>
  );
};

export default Footer;
