import {
  CharacterCard,
  Search,
  Filter,
  Pagination,
  CharacterSkeleton,
} from "../../components";
import { useEffect, useState } from "react";
import { Route } from "../../constants";
import { GET_CHARACTERS } from "../../queries/character_query";
import { useQuery } from "@apollo/client";

const CharachterPage = () => {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState({});
  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { page: page, filter: filter },
  });
  const characters = data && data.characters.results;
  const pageCount = data && data.characters.info.pages;

  const handlePageChange = async ({ selected }) => {
    setPage(selected);
  };

  return (
    <div className="mb-20 w-full flex flex-col items-center flex-1 px-5 md:px-20">
      <Search
        placeholder={"Search Characters"}
        handler={(value) => {
          setFilter({ name: value });
        }}
      />
      <div
        className="w-full mb-10 flex
        justify-between items-center
        flex-col md:flex-row  "
      >
        <Filter
          filterItems={{ title: "Status", items: ["alive", "dead", "unknown"] }}
          setFilter={setFilter}
          filter={filter}
        />
        <Filter
          filterItems={{
            title: "Gender",
            items: ["Male", "Female", "unknown"],
          }}
          setFilter={setFilter}
          filter={filter}
        />
      </div>
      {characters && (
        <div className="w-full">
          <h1 className="mb-5 text-3xl font-bold">
            {data.characters.info.count}{" "}
            {data.characters.info.count > 1 ? "Characters" : "Character"}
          </h1>
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-20 ">
            {characters.map((character) => {
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
      )}
      {
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-20">
          {loading &&
            Array(10)
              .fill()
              .map((item, index) => {
                return <CharacterSkeleton key={index} />;
              })}
        </div>
      }
      {error && <p>Error :(</p>}
      <Pagination pageCount={pageCount} onPageChange={handlePageChange} />
    </div>
  );
};

export default CharachterPage;
