import { useEffect } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import useHttp from "../../../../hooks/useHttp";
const Quote = () => {
  const { data: quote, sendRequest: getQuote } = useHttp();

  useEffect(() => {
    const fetchData = async () => {
      await getQuote(
        "http://loremricksum.com/api/?paragraphs=1&quotes=1",
        false
      );
    };
    fetchData();
  }, []);

  return (
    <div className="bg-lightGreen dark:bg-lightBlue my-5 min-h[192px] py-5 flex items-center justify-center -mx-24 mb-20">
      <span className="flex flex-col">
        <FaQuoteLeft className="text-white text-3xl dark:text-darkGreen" />
        <h1 className="text-5xl font-bold px-6 flex justify-center">
          {quote ? quote["data"][0] : "Wubba Lubba Dub Dub"}
        </h1>
        <FaQuoteRight className="text-white text-3xl place-self-end dark:text-darkGreen" />
      </span>
    </div>
  );
};

export default Quote;
