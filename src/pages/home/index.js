import { Description, HomeImage } from "./components";
import { Family, EpisodesToWatch, Quote } from "./sections";
const HomePage = () => {
  return (
    <div>
      <div className="flex items-center w-full px-20 mb-10">
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
