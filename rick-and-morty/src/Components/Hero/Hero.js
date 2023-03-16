import InputField from "../UI/Input/input";
const Hero = () => {
  return (
    <div className=" text-white w-1/3 ml-80 mt-16 h-2/3 flex flex-col justify-evenly">
      <h1 className=" text-7xl">
        Rick & <br /> Morty API
      </h1>
      <p className=" text-xl  border-l-8 border-l-lightBlue border-spacing-x-12 px-8">
        Find your favorite characters, episode and locations
      </p>
      <div>
        <InputField></InputField>
      </div>
    </div>
  );
};

export default Hero;
