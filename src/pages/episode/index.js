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

  const handlePageChange = async ({ selected }) => {
    setPage(selected);
  };
  return (
    <div>
      <div className="mb-20 w-full flex flex-col items-center flex-1">
        <Search placeholder={"Search Episodes"} />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-20">
          {episodes &&
            episodes.map((episode) => {
              return (
                <EpisodeCard
                  key={episode.id}
                  to={Route.EPISODE + "/" + episode.id}
                  episode={episode}
                />
              );
            })}
        </div>
        <Pagination onPageChange={handlePageChange} pageCount={3} />
      </div>
    </div>
  );
};

export default EpisodePage;
