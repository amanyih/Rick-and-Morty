import Morty from "../../../assets/image/placeholder.jpg";
import { FaCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TbAlien } from "react-icons/tb";
import { BsGenderFemale, BsGenderMale, BsQuestionCircle } from "react-icons/bs";
import classNames from "classnames";

const CharacterCard = ({ to, character }) => {
  return (
    <Link className="w-full" to={to ? to : "id"}>
      <div className="  w-full rounded-xl overflow-hidden shadow-2xl m-2 pb-2 bg-white dark:bg-bodyColor dark:text-white ">
        <img
          className="w-full h-full object-cover"
          src={character.image}
          alt=""
        />
        <div className="px-4 py-2 mt-2 flex flex-col justify-between h-full gap-2">
          <h1 className="text-3xl font-bold w-full overflow-hidden whitespace-nowrap overflow-ellipsis">
            {character.name}
          </h1>
          <span className="text-2xl flex items-center">
            <span className="text-2xl flex items-center gap-2">
              Status : {character.status}
              <FaCircle
                className={classNames({
                  "text-green-500": character.status === "Alive",
                  "text-red-500": character.status === "Dead",
                  "text-gray-500": character.status === "unknown",
                })}
              />
            </span>
          </span>
          <h2 className="text-2xl flex items-center gap-2">
            <TbAlien className="inline-block mr-2" />
            {character.species}
          </h2>
          <h2 className="text-2xl flex items-center gap-2">
            <BsGenderFemale
              className={classNames({
                hidden: character.gender !== "Female",
              })}
            />
            <BsGenderMale
              className={classNames({
                hidden: character.gender !== "Male",
              })}
            />
            <BsQuestionCircle
              className={classNames({
                hidden: character.gender !== "unknown",
              })}
            />

            {character.gender}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default CharacterCard;
