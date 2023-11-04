import { useEffect } from "react";
import { EpisodeCard } from "../../../../components";
import useHttp from "../../../../hooks/useHttp";
import { Route } from "../../../../constants";
const EpisodesToWatch = () => {
  const { data, sendRequest: getEpisodes } = useHttp();

  useEffect(() => {
    const fetchData = async () => {
      await getEpisodes("episode/10,28");
    };
    fetchData();
  });
  return (
    <div className="mb-20">
      <h1 className="mb-5 font-bold text-5xl">Episodes To Watch</h1>
      {data && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-20">
          {data.map((episode) => (
            <EpisodeCard
              key={episode.id}
              episode={episode}
              to={Route.EPISODE + "/" + episode.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default EpisodesToWatch;
