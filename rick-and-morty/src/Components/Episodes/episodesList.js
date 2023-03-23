import { Fragment, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import Episode from "./episodes";
import ReactPaginate from "react-paginate";
import Filter from "../Characters/Filter";
import InputField from "../UI/Input/input";

const EpisodesList = () => {
  const [episodes, setEpisodes] = useState(null);

  const [pages, setPages] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const data = await fetch("https://rickandmortyapi.com/api/episode");
      const res = await data.json();
      setPages(res.info.pages);

      setEpisodes(res.results);
    };
    getData();
  }, []);

  const handlePageChange = async (page) => {
    const p = page.selected + 1;

    console.log(p);

    const dataFromServer = await fetch(
      `https://rickandmortyapi.com/api/episode/?page=${p}`
    );
    const jsonData = await dataFromServer.json();
    setEpisodes(jsonData.results);
  };

  return (
    <Fragment>
      <Filter></Filter>
      <div className=" max-w-full">
        <h1 className="text-6xl mb-3 text-white">Episodes</h1>
        <InputField></InputField>
        <div className="flex mt-4 flex-wrap max-w-bigger  h-bigger overflow-y-auto scrollbar-thin scrollbar-thumb-lightBlue scrollbar-track-body">
          {!episodes ? (
            <FontAwesomeIcon icon={faSpinner} className="text-white text-7xl" />
          ) : (
            episodes.map((e) => (
              <Episode
                key={e.id}
                id={e.id}
                name={e.name}
                episode={e.episode}
                air_date={e.air_date}
              />
            ))
          )}
        </div>
        <ReactPaginate
          pageCount={pages}
          containerClassName="flex mx-auto text-3xl text-white pt-4 rounded-xl justify-center"
          pageClassName="border-2 border-lightGreen bg-lightBlue py-1 px-2"
          onPageChange={handlePageChange}
          activeClassName="bg-lightBlue"
          previousClassName="border-2 border-lightGreen bg-lightBlue py-1 px-2"
          nextClassName="border-2 border-lightGreen bg-lightBlue py-1 px-2"
          breakClassName="border-2 border-lightGreen bg-lightBlue py-1 px-2"
        />
      </div>
    </Fragment>
  );
};

export default EpisodesList;
