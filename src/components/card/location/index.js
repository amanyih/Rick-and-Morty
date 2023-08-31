import sun from "../../../assets/image/screaminSun.png";
import { Link } from "react-router-dom";

const LocationCard = ({ to, location }) => {
  console.log("location card", location);
  return (
    <Link className="inline-block" to="">
      <span className="flex shadow-2xl h-48 m-2 rounded-xl overflow-hidden">
        <div className="w-48 bg-blue-600">
          <img className="object-cover w-full h-full" src={sun} alt="" />
        </div>
        <div className="p-3 flex flex-col justify-evenly items-start">
          <h1 className="text-2xl">{location.name}</h1>
          <h1 className="text-2xl">{location.type}</h1>
          <h1 className="text-2xl">{location.dimension}</h1>
        </div>
      </span>
    </Link>
  );
};

export default LocationCard;
