import { EpisodeCard, Search, Pagination } from "../../components";
import { Route } from "../../constants";
import useHttp from "../../hooks/useHttp";
import { useEffect } from "react";
const EpisodePage = () => {
  const { data, sendRequest: getEpisodes } = useHttp();
  useEffect(() => {
    const fetchData = async () => {
      await getEpisodes("episode", true, true);
      console.log("fetched episodes", data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className="mb-20 w-full flex flex-col items-center flex-1">
        <Search />

        <div className="mb-20 flex flex-wrap items-center pl-20">
          {data &&
            data.map((episode) => {
              return (
                <EpisodeCard
                  key={episode.id}
                  to={Route.EPISODE + "/" + episode.id}
                  episode={episode}
                />
              );
            })}
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default EpisodePage;
