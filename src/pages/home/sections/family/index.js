import { CharacterCard } from "../../../../components";
import { Route } from "../../../../constants";
const Family = () => {
  return (
    <div className="mb-10">
      <h1 className="mb-5 text-5xl font-bold">Family</h1>
      <div className="flex w-full flex-wrap">
        <CharacterCard to={Route.CHARACTER + "/id"} />
        <CharacterCard to={Route.CHARACTER + "/id"} />
        <CharacterCard to={Route.CHARACTER + "/id"} />
        <CharacterCard to={Route.CHARACTER + "/id"} />
        <CharacterCard to={Route.CHARACTER + "/id"} />
      </div>
    </div>
  );
};

export default Family;
