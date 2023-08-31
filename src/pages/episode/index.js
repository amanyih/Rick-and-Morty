import { EpisodeCard, Search, Pagination } from "../../components";
import { Route } from "../../constants";
import useHttp from "../../hooks/useHttp";
import { useEffect, useState } from "react";
const EpisodePage = () => {
  const { data, sendRequest: getEpisodes } = useHttp();
  const [page, setPage] = useState(1);

  const handlePageChange = async ({ selected }) => {
    setPage(selected);
    await getEpisodes(`episode/?page=${selected}`, true, true);
    console.log("page changed", selected, data);
  };

  useEffect(() => {
    const fetchData = async () => {
      await getEpisodes("episode", true, true);
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className="mb-20 w-full flex flex-col items-center flex-1">
        <Search placeholder={"Search Episodes"} />

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
        <Pagination onPageChange={handlePageChange} pageCount={3} />
      </div>
    </div>
  );
};

export default EpisodePage;
