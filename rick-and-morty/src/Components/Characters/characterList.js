import Character from "./character";

import placeholder from "../../Assests/placeholder.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Filter from "./Filter";

import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import InputField from "../UI/Input/input";

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
    <div className=" flex justify-between align-middle m-4">
      <div className="w-1/4 flex justify-center align-middle">
        <Filter></Filter>
      </div>
      <div className=" flex flex-col alig w-8/12">
        <h1 className=" text-7xl text-yellow-100">Characters</h1>
        <InputField></InputField>

        <div className="flex flex-wrap bg-lighCharcoal rounded-2xl mt-12 p-12 justify-evenly">
          {chars == null ? (
            <FontAwesomeIcon
              icon={faSpinner}
              className="animate-spin text-white border"
            ></FontAwesomeIcon>
          ) : (
            chars.map((element) => (
              <Character
                name={element.name}
                id={element.id}
                status={element.status}
                img={element.image}
                //   species={element.species}
              ></Character>
            ))
          )}
        </div>
        {chars == null ? (
          ""
        ) : (
          <ReactPaginate
            pageCount={42}
            containerClassName="flex mx-auto mt-6"
            pageClassName="ml-6 border-2 border-blue-800 py-1 px-2 "
            nextClassName="ml-6"
            onPageChange={handlePageChange}
            activeClassName="bg-lightBlue"
          ></ReactPaginate>
        )}
      </div>
    </div>
  );
};

export default CharacterList;
