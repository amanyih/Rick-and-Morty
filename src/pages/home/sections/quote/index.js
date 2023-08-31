import { useEffect, useState } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import useHttp from "../../../../hooks/useHttp";
const Quote = () => {
  const [quote, setQuote] = useState("Wubba Lubba Dub Dub");
  const { sendRequest: getQuote } = useHttp();

  useEffect(() => {
    setQuote("Wubba Lubba Dub Dub");
    getQuote("/", false);
  }, [getQuote]);

  return (
    <div className="bg-lightGreen dark:bg-lightBlue my-5 h-48 flex items-center justify-center -mx-5 mb-10">
      <span className="flex flex-col">
        <FaQuoteLeft className="text-white text-3xl dark:text-darkGreen" />
        <h1 className="text-5xl font-bold mx-2">{quote}</h1>
        <FaQuoteRight className="text-white text-3xl place-self-end dark:text-darkGreen" />
      </span>
    </div>
  );
};

export default Quote;
