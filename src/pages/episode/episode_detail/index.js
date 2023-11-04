import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_EPISODE } from "../../../queries/episode_query";
import classNames from "classnames";
import { TbAlien } from "react-icons/tb";
import { BsGenderFemale, BsGenderMale, BsQuestionCircle } from "react-icons/bs";
import { AlternateChacterCard } from "../../../components/card";

const EpisodeDetail = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_EPISODE, {
    variables: { id: id.toString() },
  });
  const episode = data && data.episode;

  return (
    <div>
      {episode && (
        <div className="flex justify-center items-center w-full mb-20">
          <div className="text-3xl pl-4 flex flex-col justify-center items-center">
            <h1 className="text-7xl font-bold mb-5">{episode.name}</h1>
            <h1 className="mb-3">{`Air Date : ${episode.air_date}`}</h1>
            <h1 className="mb-3">{`Episode : ${episode.episode}`}</h1>
          </div>
        </div>
      )}
      {episode && (
        <div className="flex justify-center items-center w-full mb-20 flex-col">
          <h1 className="text-3xl pl-4 font-bold mb-5">
            Characters in this episode
          </h1>
          <div className="flex flex-wrap gap-5">
            {episode.characters.map((character) => {
              return <AlternateChacterCard character={character} />;
            })}
          </div>
        </div>
      )}
      {loading && (
        <div className="flex justify-center items-center">
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
};

export default EpisodeDetail;
