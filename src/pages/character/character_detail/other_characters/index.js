import { useEffect } from "react";
import useHttp from "../../../../hooks/useHttp";
import { CharacterCard } from "../../../../components";
import { Route } from "../../../../constants";
const PeopleAlsoSearchedFor = ({ cur_id }) => {
  const { data, sendRequest: getOthers } = useHttp();

  useEffect(() => {
    const fetchData = async () => {
      await getOthers(
        `character/${cur_id - 2},${cur_id - 1},${cur_id + 1},${cur_id + 2}`
      );
    };
    fetchData();
  }, [getOthers, cur_id]);
  return (
    <div className="mb-5">
      <h1 className="font-bold text-4xl mb-5">People Also Search For</h1>
      {data && (
        <div className="flex flex-wrap">
          {data.map((character) => (
            <CharacterCard
              character={character}
              to={Route.CHARACTER + `/${character.id}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default PeopleAlsoSearchedFor;
