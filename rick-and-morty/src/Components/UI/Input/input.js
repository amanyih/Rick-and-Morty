import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMagnifyingGlass } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Fragment } from "react";
const InputField = () => {
  return (
    <div className=" w-full flex items-center text-2xl text-gray-400 focus-within:text-gray-600">
      <label htmlFor="search" className=" absolute ml-3 pointer-events-none">
        <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
      </label>
      <input
        type="text"
        placeholder="Search ..."
        className="pl-12 pr-3 w-3/4 font-semibold placeholder-gray-500 text-black rounded-2xl border-none h-14 focus:border-spacing-5"
        id="search"
      />
    </div>
  );
};

export default InputField;
