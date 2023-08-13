import sun from "../../../assets/image/screaminSun.png";
import { Link } from "react-router-dom";

const LocationCard = () => {
  return (
    <Link to="">
      <div className="flex shadow-2xl h-48 m-2 rounded-xl overflow-hidden">
        <div className="w-48 bg-blue-600">
          <img className="object-cover w-full h-full" src={sun} alt="" />
        </div>
        <div className="p-3 flex flex-col justify-evenly items-start">
          <h1 className="text-2xl">Earth - C137</h1>
          <h1 className="text-2xl">Location Type</h1>
          <h1 className="text-2xl">Dimension C137</h1>
        </div>
      </div>
    </Link>
  );
};

export default LocationCard;
