import rick from "../Assests/rick2.png";
import logo from "../Assests/logo1.png";
import InputField from "../Components/UI/Input/input";
const Home = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className=" flex flex-colitems-center text-white w-1/2 justify-evenly">
        <div className=" flex flex-col gap-8 w-4/5 ">
          <h1 className=" text-9xl">
            Rick & <br /> Morty API
            {/* <img src={logo} alt="" /> */}
          </h1>
          <p className=" text-5xl  border-l-8 border-l-lightBlue border-spacing-x-12 px-8">
            Find your favorite characters, episode and locations
          </p>
          <div className="">
            <InputField></InputField>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <img
          src={rick}
          className="drop-shadow-2xl  ml-72 max-w-md"
          alt="a picture of rick sanchez c-137"
        />
      </div>
    </div>
  );
};

export default Home;
