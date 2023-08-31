import Morty from "../../../assets/image/placeholder.jpg";
import { FaCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
const CharacterCard = ({ to, character }) => {
  return (
    <Link className="inline-block" to={to ? to : "id"}>
      <div className=" w-96 rounded-2xl overflow-hidden shadow-2xl m-2 pb-2">
        <img
          className="h-64 w-full object-cover"
          src={character.image}
          alt=""
        />
        <div className="px-4 py-2 mt-2">
          <h1 className="text-4xl font-semibold">{character.name}</h1>
          <span className="flex items-center">
            <span className="text-2xl mr-2">Status : {character.status}</span>
            <FaCircle className="text-green-400" />
          </span>
          <h2 className="text-2xl">Species : {character.species}</h2>
        </div>
      </div>
    </Link>
  );
};

export default CharacterCard;
