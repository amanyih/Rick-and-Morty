import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLoaderData, useParams } from "react-router-dom";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { Fragment, useEffect, useState } from "react";
import CharacterNotFound from "../UI/Error/error";

const CharacterDetail = () => {
  const { id } = useParams();

  const [charData, setChar] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [color, setColor] = useState("gray");

  useEffect(() => {
    const getChar = async () => {
      const char = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      if (!char.ok) {
        setChar(null);
        return;
      }
      const nwData = await char.json();
      if (nwData.status == "Dead") {
        setColor("red");
      } else if (nwData.status == "Alive") {
        setColor("green");
      }
      setChar(nwData);
    };
    getChar();
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return !charData ? (
    isLoading ? (
      <FontAwesomeIcon
        icon={faSpinner}
        className="absolute top-1/2 left-1/2 animate-spin text-white text-9xl"
      />
    ) : (
      <CharacterNotFound />
    )
  ) : (
    <Fragment>
      <div className="w-1/2 flex flex-col items-center gap-6 ">
        <img
          src={charData.image}
          className={` rounded-half border-8 border-${color}-400`}
          alt=""
        />
        <h1 className="text-white text-7xl">{charData.name}</h1>
      </div>
      <div className="text-5xl text-white">
        <p className=" bg-slate-600 mb-2 p-6 rounded-2xl shadow-2xl">
          Status : {charData.status}
        </p>
        <p className=" bg-slate-600 mb-2 p-6 rounded-2xl shadow-2xl">
          Species: {charData.species}
        </p>
        <p className=" bg-slate-600 mb-2 p-6 rounded-2xl shadow-2xl">
          Gender: {charData.gender}
        </p>
        <p className=" bg-slate-600 mb-2 p-6 rounded-2xl shadow-2xl">
          Origin: {charData.origin.name}
        </p>
        <p className=" bg-slate-600 mb-2 p-6 rounded-2xl shadow-2xl">
          Last Seen On: {charData.location.name}
        </p>
      </div>
    </Fragment>
  );
};

export default CharacterDetail;
