import React from "react";
import classNames from "classnames";
import { BsGenderFemale, BsGenderMale, BsQuestionCircle } from "react-icons/bs";
import { TbAlien } from "react-icons/tb";
import { Link } from "react-router-dom";

const AlternateChacterCard = ({ character }) => {
  return (
    <Link className="" to={`/character/${character.id}`}>
      <div
        className={classNames(
          "  bg-opacity-20 dark:bg-opacity-20 hover:bg-opacity-20 dark:hover:bg-opacity-20 rounded-md px-5 py-2 cursor-pointer",
          {
            "bg-green-600": character.status === "Alive",
            "bg-red-600": character.status === "Dead",
            "bg-gray-600": character.status === "unknown",
          }
        )}
      >
        <h1 className=" text-2xl font-bold text-lightBlue text-center">
          {character.name}
        </h1>
        <div className="flex justify-between items-center flex-col">
          <h2 className=" text-xl font-semibold ">
            <TbAlien className="inline-block mr-2" />
            {character.species}
          </h2>
          <h2 className=" text-xl font-semibold flex items-center gap-2">
            <BsGenderFemale
              className={classNames("font-bold", {
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

export default AlternateChacterCard;
