import { EpisodeCard } from "../../../../components";
const EpisodesToWatch = () => {
  return (
    <div className="mb-10">
      <h1 className="mb-5 font-bold text-5xl">Episodes To Watch</h1>
      <div className="flex flex-wrap">
        <EpisodeCard />
        <EpisodeCard />
        <EpisodeCard />
        <EpisodeCard />
        <EpisodeCard />
      </div>
    </div>
  );
};

export default EpisodesToWatch;
