import sun from "../../../assets/image/screaminSun.png";
import { Link } from "react-router-dom";
import { BsPin } from "react-icons/bs";
import { BiPlanet } from "react-icons/bi";
import { TbAlien } from "react-icons/tb";

const LocationCard = ({ to, location }) => {
  return (
    <Link className="w-full" to={to}>
      <span className=" flex items-center justify-between w-full rounded-xl overflow-hidden shadow-2xl m-2 pb-2 bg-white dark:bg-bodyColor dark:text-white">
        <div className=" w-1/3 h-full overflow-hidden rounded-l-xl bg-cover bg-center bg-no-repeat">
          <img className=" w-full h-full object-cover" src={sun} alt="" />
        </div>
        <div className=" w-2/3 px-4 py-2 mt-2 flex flex-col justify-between h-full gap-2">
          <h1
            className=" text-3xl font-bold w-full overflow-hidden whitespace-nowrap overflow-ellipsis
          flex items-center
           "
          >
            <BsPin className="inline-block mr-2" />

            {location.name}
          </h1>
          <h1 className=" text-2xl w-full overflow-hidden whitespace-nowrap overflow-ellipsis flex items-center">
            <BiPlanet className="inline-block mr-2" />
            {location.type}
          </h1>
          <h1 className=" text-2xl w-full overflow-hidden whitespace-nowrap overflow-ellipsis flex items-center">
            {location.dimension}
          </h1>
          <h1 className=" text-2xl bg-lightBlue px-2 py-1 rounded-full text-white font-semibold">
            <TbAlien className="inline-block mr-2" />
            {location.residents.length}{" "}
            {location.residents.length > 1 ? "Residents" : "Resident"}
          </h1>
        </div>
      </span>
    </Link>
  );
};

export default LocationCard;
