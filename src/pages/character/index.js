import { CharacterCard, Search, Filter, Pagination } from "../../components";
import useHttp from "../../hooks/useHttp";
import { useEffect } from "react";
import { Route } from "../../constants";

const CharachterPage = () => {
  const { data, sendRequest: getCharacters } = useHttp();

  useEffect(() => {
    const fetchData = async () => {
      getCharacters("character", true, true);
    };
    fetchData();
  }, [getCharacters]);

  return (
    <div className="mb-20 w-full flex flex-col items-center flex-1">
      <Search />
      <div className="mb-10 flex">
        <Filter
          filterItems={[
            { title: "Status", items: ["alive", "dead", "unknown"] },
          ]}
        />
        <Filter
          filterItems={[
            { title: "Gender", items: ["Male", "Female", "unknown"] },
          ]}
        />
      </div>
      <div className="mb-20 flex flex-wrap items-center pl-20">
        {data &&
          data.map((character) => {
            return (
              <CharacterCard
                key={character.id}
                to={Route.CHARACTER + "/" + character.id}
                character={character}
              />
            );
          })}
      </div>
      <Pagination />
    </div>
  );
};

export default CharachterPage;
