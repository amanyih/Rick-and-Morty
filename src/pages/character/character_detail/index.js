import { useEffect } from "react";
import PeopleAlsoSearchedFor from "./other_characters";
import { EpisodeCard } from "../../../components";
import { Route } from "../../../constants";
import useHttp from "../../../hooks/useHttp";
import { useParams } from "react-router-dom";
const CharacterDetail = () => {
  const { data, sendRequest: getFamily } = useHttp();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      await getFamily(`character/${id}`);
    };
    fetchData();
  }, [id, getFamily]);

  return (
    <div className="w-full">
      {data && (
        <div className="flex justify-center items-center w-full mb-10">
          <div className="pr-4 border-r-2">
            <img src={data.image} alt="" />
          </div>
          <div className="text-3xl pl-4">
            <h1 className="text-7xl font-bold">{data.name}</h1>
            <h1 className="mb-3">{`Species : ${data.species}`}</h1>
            <h1 className="mb-3">{`Status : ${data.status}`}</h1>
            <h1 className="mb-3">{`Gender : ${data.gender}`}</h1>
            <h1 className="mb-3">{`Origin : ${data.origin}`}</h1>
          </div>
        </div>
      )}
      <div className="mb-10">
        <h1 className="font-bold text-4xl mb-5">Appears On</h1>
        <div className="flex flex-wrap">
          <EpisodeCard to={Route.EPISODE + "/id"} />
          <EpisodeCard to={Route.EPISODE + "/id"} />
          <EpisodeCard to={Route.EPISODE + "/id"} />
          <EpisodeCard to={Route.EPISODE + "/id"} />
        </div>
      </div>
      <PeopleAlsoSearchedFor cur_id={id} />
    </div>
  );
};

export default CharacterDetail;
