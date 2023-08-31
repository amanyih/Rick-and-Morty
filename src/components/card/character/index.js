import Morty from "../../../assets/image/placeholder.jpg";
import { FaCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
const CharacterCard = (props) => {
  return (
    <Link className="inline-block" to={props.to ? props.to : "id"}>
      <div className=" w-96 rounded-2xl overflow-hidden shadow-2xl m-2 pb-2">
        <img className="h-64 w-full object-cover" src={Morty} alt="" />
        <div className="px-4 py-2 mt-2">
          <h1 className="text-4xl font-semibold">Rick Sanchez</h1>
          <span className="flex items-center">
            <span className="text-2xl mr-2">Status : Alive</span>
            <FaCircle className="text-green-400" />
          </span>
          <h2 className="text-2xl">Species : Human</h2>
        </div>
      </div>
    </Link>
  );
};

export default CharacterCard;
