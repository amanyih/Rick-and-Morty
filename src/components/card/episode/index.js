import Episode from "./../../../assets/image/background.jpg";
import { Link } from "react-router-dom";

const EpisodeCard = (props) => {
  return (
    <Link className="inline-block" to={props.to ? "" : ""}>
      <div className=" m-2 flex rounded-2xl overflow-clip shadow-2xl">
        <img className="w-48 h-48 object-cover" src={Episode} alt="" />
        <div className="px-4 py-2 text-3xl flex flex-col justify-evenly">
          <h1 className="">{props.name ? props.name : "Rick's Giving"}</h1>
          <h1 className="">S02E07</h1>
          <h1 className="">03-07-2015</h1>
        </div>
      </div>
    </Link>
  );
};

export default EpisodeCard;
