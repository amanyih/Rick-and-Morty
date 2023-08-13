import { CharacterCard, Search } from "../../components";

const CharachterPage = () => {
  return (
    <div className="mb-20 w-full flex flex-col items-center">
      <Search />
      <div className=" flex flex-wrap items-center pl-20">
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
      </div>
    </div>
  );
};

export default CharachterPage;
