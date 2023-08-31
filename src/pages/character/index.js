import { CharacterCard, Search, Filter, Pagination } from "../../components";

const CharachterPage = () => {
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
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
      </div>
      <Pagination />
    </div>
  );
};

export default CharachterPage;
