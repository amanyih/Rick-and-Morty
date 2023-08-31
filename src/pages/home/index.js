import { Description, HomeImage } from "./components";
import { Family, EpisodesToWatch, Quote } from "./sections";
const HomePage = () => {
  return (
    <div className="px-20">
      <div className="flex items-center w-full  mb-10">
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
