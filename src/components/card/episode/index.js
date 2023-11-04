import Episode from "./../../../assets/image/background.jpg";
import { Link } from "react-router-dom";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { BsCalendarDate } from "react-icons/bs";

const EpisodeCard = ({ to, episode }) => {
  return (
    <Link className=" w-full" to={to ? to : ""}>
      <div className="  flex w-full justify-between bg-white dark:bg-bodyColor dark:text-white items-center rounded-2xl overflow-hidden shadow-2xl m-2 pb-2">
        <img className=" w-1/3 object-cover" src={Episode} alt="" />
        <div className=" px-4 py-2 mt-2 w-2/3 flex flex-col justify-between h-full gap-2">
          <h1 className=" text-4xl font-semibold flex items-center gap-2 overflow-hidden whitespace-nowrap overflow-ellipsis">
            <HiOutlineVideoCamera />

            {episode.name}
          </h1>
          <h1 className=" text-2xl font-semibold">{episode.episode}</h1>
          <h1 className=" text-2xl font-semibold flex items-center gap-2">
            <BsCalendarDate />
            {episode.air_date}
          </h1>
        </div>
      </div>
    </Link>
  );
};

export default EpisodeCard;
