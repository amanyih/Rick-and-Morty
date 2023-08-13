import placeholder from "../../../assets/image/placeholder.jpg";
import { EpisodeCard, CharacterCard } from "../../../components";
import { Route } from "../../../constants";
const CharacterDetail = () => {
  return (
    <div className="w-full">
      <div className="flex justify-center items-center w-full mb-10">
        <div className="pr-4 border-r-2">
          <img src={placeholder} alt="" />
        </div>
        <div className="text-3xl pl-4">
          <h1 className="text-7xl font-bold">Rick Sanchez</h1>
          <h1 className="mb-3">Species : Human</h1>
          <h1 className="mb-3">Status : Alive</h1>
          <h1 className="mb-3">Gender : Male</h1>
          <h1 className="mb-3">Origin : Earth</h1>
          <h1 className="mb-3">Last Seen On : Unity</h1>
        </div>
      </div>
      <div className="mb-10">
        <h1 className="font-bold text-4xl mb-5">Appears On</h1>
        <div className="flex flex-wrap">
          <EpisodeCard to={Route.EPISODE + "/id"} />
          <EpisodeCard to={Route.EPISODE + "/id"} />
          <EpisodeCard to={Route.EPISODE + "/id"} />
          <EpisodeCard to={Route.EPISODE + "/id"} />
        </div>
      </div>
      <div className="mb-5">
        <h1 className="font-bold text-4xl mb-5">People Also Search For</h1>
        <div className="flex flex-wrap">
          <CharacterCard to={Route.CHARACTER + "/id"} />
          <CharacterCard to={Route.CHARACTER + "/id"} />
          <CharacterCard to={Route.CHARACTER + "/id"} />
          <CharacterCard to={Route.CHARACTER + "/id"} />
          <CharacterCard to={Route.CHARACTER + "/id"} />
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
