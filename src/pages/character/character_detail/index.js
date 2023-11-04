import PeopleAlsoSearchedFor from "./other_characters";
import { Route } from "../../../constants";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_CHARACTER } from "../../../queries/character_query";
import { Link } from "react-router-dom";
import classNames from "classnames";
const CharacterDetail = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_CHARACTER, {
    variables: { id: id.toString() },
  });

  const character = data && data.character;

  return (
    <div className="mb-20 w-full">
      {character && (
        <div className=" w-full flex flex-col items-center flex-1 mb-20">
          <h1 className="mb-5 text-5xl font-bold">{character.name}</h1>
          <img
            className={classNames("rounded-full border-4", {
              "border-green-500": character.status === "Alive",
              "border-red-500": character.status === "Dead",
              "border-gray-500": character.status === "unknown",
            })}
            src={character.image}
            alt=""
          />
        </div>
      )}

      <PeopleAlsoSearchedFor cur_id={id} />
    </div>
  );
};

export default CharacterDetail;
