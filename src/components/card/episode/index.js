import Episode from "./../../../assets/image/background.jpg";
import { Link } from "react-router-dom";

const EpisodeCard = ({ to, episode }) => {
  return (
    <Link className="inline-block" to={to ? "" : ""}>
      <div className=" m-2 flex rounded-2xl overflow-clip shadow-2xl">
        <img className="w-48 h-48 object-cover" src={Episode} alt="" />
        <div className="px-4 py-2 text-3xl flex flex-col justify-evenly">
          <h1 className="">{episode.name}</h1>
          <h1 className="">{episode.episode}</h1>
          <h1 className="">{episode.air_date}</h1>
        </div>
      </div>
    </Link>
  );
};

export default EpisodeCard;
