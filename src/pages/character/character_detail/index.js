import PeopleAlsoSearchedFor from "./other_characters";
import { Route } from "../../../constants";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_CHARACTER } from "../../../queries/character_query";
import { Link } from "react-router-dom";
import classNames from "classnames";
import {
  BsGenderFemale,
  BsGenderMale,
  BsQuestionCircle,
  BsPin,
} from "react-icons/bs";
import { TbAlien } from "react-icons/tb";

const CharacterDetail = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_CHARACTER, {
    variables: { id: id.toString() },
  });

  const character = data && data.character;

  return (
    <div className="mb-20 w-full px-20 ">
      {character && (
        <div className=" w-full flex flex-col md:flex-row justify-center items-center gap-10 mb-20">
          <img
            className={classNames("rounded-full border-4", {
              "border-green-500": character.status === "Alive",
              "border-red-500": character.status === "Dead",
              "border-gray-500": character.status === "unknown",
            })}
            src={character.image}
            alt=""
          />
          <div>
            <h1 className="text-5xl font-bold mb-5 dark:text-white">
              {character.name}
            </h1>
            <div className="flex items-center gap-2 mb-5">
              <span className="text-xl font-bold">Status: </span>
              <span
                className={classNames("text-xl font-bold", {
                  "text-green-500": character.status === "Alive",
                  "text-red-500": character.status === "Dead",
                  "text-gray-500": character.status === "unknown",
                })}
              >
                {character.status}
              </span>
            </div>
            <div>
              <h2 className=" text-3xl flex items-center gap-2 mb-5">
                <TbAlien className=" inline-block mr-2 font-bold text-3xl text-lightBlue " />
                {character.species}
              </h2>
              <h2 className="text-3xl flex items-center gap-2 mb-5">
                <BsGenderFemale
                  className={classNames(
                    " inline-block mr-2 font-bold text-3xl  ",
                    {
                      hidden: character.gender !== "Female",
                    }
                  )}
                />
                <BsGenderMale
                  className={classNames(
                    " inline-block mr-2 font-bold text-3xl  ",
                    {
                      hidden: character.gender !== "Male",
                    }
                  )}
                />
                <BsQuestionCircle
                  className={classNames(
                    " inline-block mr-2 font-bold text-3xl  ",
                    {
                      hidden: character.gender !== "unknown",
                    }
                  )}
                />

                {character.gender}
              </h2>
              <h1>
                <span className="text-xl font-bold">
                  <BsPin className="inline-block mr-2 font-bold text-3xl  " />{" "}
                </span>
                <Link
                  className="text-xl font-bold text-lightBlue"
                  to={
                    character.origin.id
                      ? Route.LOCATION + "/" + character.origin.id
                      : "#"
                  }
                >
                  {character.origin.name}
                </Link>
              </h1>
            </div>
          </div>
        </div>
      )}

      {character && (
        <div className="mb-20">
          <h1 className="mb-5 text-3xl font-bold">
            Appears in {character.episode.length}
            {character.episode.length > 1 ? " Episodes" : " Episode"}
            {"  "}
          </h1>
          <div className="flex flex-wrap gap-5">
            {character &&
              character.episode.map((episode) => {
                return (
                  <Link
                    className=" text-xl font-bold  text-black dark:text-white bg-slate-200 dark:bg-slate-500 rounded-xl px-5 py-2 hover:bg-slate-400 dark:hover:bg-slate-400 transition duration-300 "
                    to={Route.EPISODE + "/" + episode.id}
                  >
                    {episode.episode} -{episode.name}
                  </Link>
                );
              })}
          </div>
        </div>
      )}
      {character && (
        <div className="mb-20 flex flex-col items-center gap-5">
          <h1 className="mb-5 text-3xl font-bold border-b-2 border-black dark:border-white pb-2">
            Last Known Location
          </h1>
          <Link
            className="text-xl font-bold text-lightBlue"
            to={
              character.location.id
                ? Route.LOCATION + "/" + character.location.id
                : "#"
            }
          >
            {character.location.name}
          </Link>
        </div>
      )}

      <PeopleAlsoSearchedFor cur_id={id} />
    </div>
  );
};

export default CharacterDetail;
