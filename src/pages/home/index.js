import { Description, HomeImage } from "./components";
import { Family, EpisodesToWatch, Quote } from "./sections";
const HomePage = () => {
  return (
    <div className="px-20">
      <div className="flex flex-col lg:flex-row items-center w-full mb-10">
        <Description />
        <HomeImage />
      </div>
      <Quote />
      <Family />
      <EpisodesToWatch />
    </div>
  );
};

export default HomePage;
