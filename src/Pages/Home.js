import { useEffect, useState } from "react";
import rick from "../Assests/rick2.png";
import InputField from "../Components/UI/Input/input";

import { FaGithub, FaInstagram } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
const Home = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const fetchQuote = async () => {
      const q = await fetch(
        "http://loremricksum.com/api/?paragraphs=1&quotes=1"
      );
      console.log(q);
      const quoteData = await q.json();
      setQuote(quoteData.data[0]);
    };
    fetchQuote();
  }, []);

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
      <div className="w-1/2 flex flex-col items-center ">
        <img
          src={rick}
          className="drop-shadow-2xl  ml-72 max-w-md"
          alt="arick sanchez c-137"
        />
        <p className="text-lightBlue text-2xl">
          {quote.length < 150 ? quote : "wubba lubba dub dub"}
        </p>
      </div>
      <div className=" absolute bottom-0 left-1/2 flex -translate-x-1/2 text-3xl text-white gap-8 mb-4">
        <a
          href="https://github.com/amanyih/Rick-and-Morty"
          target={"_blank"}
          className=" hover:text-lightBlue"
          rel="noreferrer"
        >
          {<FaGithub />}
        </a>
        <a
          href="https://t.me/bbbburp"
          target={"_blank"}
          className=" hover:text-lightBlue"
          rel="noreferrer"
        >
          {<BsTelegram />}
        </a>
        <a
          href="https://t.me/bbbburp"
          target={"_blank"}
          className=" hover:text-lightBlue"
          rel="noreferrer"
        >
          {<FaInstagram />}
        </a>
      </div>
    </div>
  );
};

export default Home;
