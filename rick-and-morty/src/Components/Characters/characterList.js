import Character from "./character";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Filter from "./Filter";

import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import InputField from "../UI/Input/input";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const CharacterList = () => {
  const [chars, setChars] = useState(null);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setChars(res.results);
      });
  }, []);
  const handlePageChange = async (page) => {
    const p = page.selected + 1;

    const dataFromServer = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${p}`
    );
    const jsonData = await dataFromServer.json();
    setChars(jsonData.results);
  };
  return (
    <Fragment>
      <Filter></Filter>
      <div className=" w-full flex flex-col gap-8">
        <div>
          <h1 className="text-5xl align-middle text-white mb-5">Characters</h1>
          <InputField></InputField>
        </div>
        <div className="flex w-full flex-wrap gap-8 h-bigger max-w-bigger overflow-y-auto scrollbar-thin scrollbar-thumb-lightBlue scrollbar-track-body">
          {chars == null ? (
            <FontAwesomeIcon
              icon={faSpinner}
              className="animate-spin text-white text-9xl"
            />
          ) : (
            chars.map((element) => (
              <Link to={element.id.toString()} key={element.id}>
                <Character
                  name={element.name}
                  status={element.status}
                  img={element.image}
                ></Character>
              </Link>
            ))
          )}
        </div>
        {chars == null ? (
          ""
        ) : (
          <ReactPaginate
            pageCount={42}
            containerClassName="flex mx-auto text-3xl text-white bg-pagination rounded-xl"
            pageClassName="border-2 border-lightGreen bg-lightBlue py-1 px-2"
            onPageChange={handlePageChange}
            activeClassName="bg-lightBlue"
            previousClassName="border-2 border-lightGreen bg-lightBlue py-1 px-2"
            nextClassName="border-2 border-lightGreen bg-lightBlue py-1 px-2"
            breakClassName="border-2 border-lightGreen bg-lightBlue py-1 px-2"
          ></ReactPaginate>
        )}
      </div>
    </Fragment>
  );
};

export default CharacterList;
