import { CharacterCard, Search, Filter, Pagination } from "../../components";
import useHttp from "../../hooks/useHttp";
import { useEffect, useState } from "react";
import { Route } from "../../constants";

const CharachterPage = () => {
  const { data, sendRequest: getCharacters } = useHttp();
  const [page, setPage] = useState(1);

  const handlePageChange = async ({ selected }) => {
    setPage(selected);
    await getCharacters(`character/?page=${selected}`, true, true);
    console.log("page changed", selected, data);
  };

  useEffect(() => {
    const fetchData = async () => {
      await getCharacters("character/?page=1", true, true);
    };
    fetchData();
  }, []);

  return (
    <div className="mb-20 w-full flex flex-col items-center flex-1">
      <Search placeholder={"Search Characters"} />
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
      <div className="mb-20 flex flex-wrap items-center pl-20 justify-evenly">
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
      <Pagination pageCount={42} onPageChange={handlePageChange} />
    </div>
  );
};

export default CharachterPage;
