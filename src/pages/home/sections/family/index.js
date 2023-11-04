import { CharacterCard } from "../../../../components";
import { Route } from "../../../../constants";
import { useQuery } from "@apollo/client";
import { GET_CHARACTER_BY_IDS } from "../../../../queries/character_query";

const Family = () => {
  const ids = [1, 2, 3, 4, 5];
  const { loading, error, data } = useQuery(GET_CHARACTER_BY_IDS, {
    variables: { ids: ids },
  });
  const characters = data && data.charactersByIds;

  return (
    <div className="mb-20">
      <h1 className="mb-5 text-5xl font-bold">Family</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-20">
        {characters &&
          characters.map((character) => {
            return (
              <CharacterCard
                key={character.id}
                to={Route.CHARACTER + "/" + character.id}
                character={character}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Family;
