import { useEffect } from "react";
import { CharacterCard } from "../../../../components";
import { Route } from "../../../../constants";
import useHttp from "./../../../../hooks/useHttp";

const Family = () => {
  const { data, sendRequest: getFamily } = useHttp();

  useEffect(() => {
    const fetchData = async () => {
      await getFamily("character/1,2,3,4,5");
      console.log("getting family");
    };
    fetchData();
  }, []);

  return (
    <div className="mb-10">
      <h1 className="mb-5 text-5xl font-bold">Family</h1>
      <div className="flex w-full flex-wrap">
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
    </div>
  );
};

export default Family;
