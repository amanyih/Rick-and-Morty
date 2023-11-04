import { CharacterCard } from "../../../../components";
import { Route } from "../../../../constants";
import { useQuery } from "@apollo/client";
import { GET_CHARACTER_BY_IDS } from "../../../../queries/character_query";
const PeopleAlsoSearchedFor = ({ cur_id }) => {
  const ids = [cur_id - 2, cur_id - 1, cur_id + 1, cur_id + 2];
  const { loading, error, data } = useQuery(GET_CHARACTER_BY_IDS, {
    variables: { ids: ids },
  });
  const characters = data && data.charactersByIds;
  return (
    <div className="mb-20">
      {characters && (
        <h1 className="font-bold text-4xl mb-10">People Also Search For</h1>
      )}
      {characters && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-20">
          {characters.map((character) => (
            <CharacterCard
              character={character}
              to={Route.CHARACTER + "/" + character.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default PeopleAlsoSearchedFor;
