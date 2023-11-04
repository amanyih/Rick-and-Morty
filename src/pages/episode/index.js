import { EpisodeCard, Search, Pagination } from "../../components";
import { Route } from "../../constants";
import useHttp from "../../hooks/useHttp";
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_EPISODES } from "../../queries/episode_query";
const EpisodePage = () => {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState({});
  const { loading, error, data } = useQuery(GET_EPISODES, {
    variables: { page: page, filter: filter },
  });

  const episodes = data && data.episodes.results;
  const episodeCount = data && data.episodes.info.count;
  const pageCount = data && data.episodes.info.pages;

  const handlePageChange = async ({ selected }) => {
    setPage(selected);
  };
  return (
    <div>
      <div className="mb-20 w-full flex flex-col items-center flex-1">
        <Search
          placeholder={"Search Episodes"}
          handler={(value) => {
            setFilter({ name: value });
          }}
        />
        {episodes && (
          <div>
            <h1 className="mb-5 text-3xl font-bold">
              {episodeCount} {episodeCount > 1 ? "Episodes" : "Episode"}
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-20">
              {episodes.map((episode) => {
                return (
                  <EpisodeCard
                    key={episode.id}
                    to={Route.EPISODE + "/" + episode.id}
                    episode={episode}
                  />
                );
              })}
            </div>
          </div>
        )}

        <Pagination onPageChange={handlePageChange} pageCount={pageCount} />
      </div>
    </div>
  );
};

export default EpisodePage;
