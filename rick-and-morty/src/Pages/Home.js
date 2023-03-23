import { useEffect, useState } from "react";
import rick from "../Assests/rick2.png";
import InputField from "../Components/UI/Input/input";
const Home = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const fetchQuote = async () => {
      const q = await fetch("loremricksum.com/api");
      console.log(q);
      const quoteData = await q.json();
      setQuote(quoteData.data[0]);
    };
    fetchQuote();
  });

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
          alt="arick sanchez c-137"
        />
        <span className="text-white text-2xl mx-36">{quote}</span>
      </div>
    </div>
  );
};

export default Home;
