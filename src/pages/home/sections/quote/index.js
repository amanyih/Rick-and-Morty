import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
const Quote = () => {
  return (
    <div className="bg-lightGreen dark:bg-lightBlue my-5 h-48 flex items-center justify-center -mx-5 mb-10">
      <span className="flex flex-col">
        <FaQuoteLeft className="text-white text-3xl dark:text-darkGreen" />
        <h1 className="text-5xl font-bold mx-2">Wubba Lubba Dub Dub</h1>
        <FaQuoteRight className="text-white text-3xl place-self-end dark:text-darkGreen" />
      </span>
    </div>
  );
};

export default Quote;
