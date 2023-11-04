import { Route } from "../../constants";
import { Link } from "react-router-dom";
import { BsTelegram, BsGithub, BsInstagram } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="border-t-2 pt-5">
      <div className="flex flex-col  justify-between items-center">
        <div className="flex justify-center items-center">
          <Link to={Route.HOME}>
            <h1 className=" text-3xl font-bold text-black transition-all duration-700 dark:text-white">
              <span>
                Rick <span className="text-green-400">and</span> Morty
              </span>
            </h1>
          </Link>
        </div>
        <div className=" flex flex-col sm:flex-row justify-between items-center px-10 py-10  w-full ">
          <div className="text-md text-gray-600 dark:text-white">
            © 2023 CookBook - All rights reserved
          </div>
          <ul className="flex last:mr-0">
            <li className="mr-6">
              <a href="https://t.me/bbbburp" target="_blank" rel="noreferrer">
                <BsTelegram className="text-3xl mx-2 hover:text-lightBlue" />
              </a>
            </li>
            <li className="mr-6">
              <a
                href="https://github.com/amanyih/Rick-and-Morty"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub className="text-3xl mx-2 hover:text-lightBlue" />
              </a>
            </li>
            <li className="mr-6">
              <a
                href="https://www.instagram.com/amanyih2/"
                target="_blank"
                rel="noreferrer"
              >
                <BsInstagram className="text-3xl mx-2 hover:text-lightBlue" />
              </a>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center"></div>
      </div>
    </div>
  );
};

export default Footer;
