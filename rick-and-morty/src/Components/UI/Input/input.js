import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMagnifyingGlass } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const InputField = () => {
  return (
    <form action="" className="flex justify-between">
      <div className=" relative">
        <label
          htmlFor="search"
          className=" translate-x-9 text-black z-30 absolute top-1/2 right-14 -translate-y-1/2"
        >
          <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
        </label>
        <input
          type="text"
          placeholder="Search characters"
          className="shadow appearance-none border rounded-full w-80 py-2 px-6 h-12 text-gray-700 leading-tigh focus:shadow-outline focus:outline-none placeholder:p-2"
          id="search"
        />
      </div>
    </form>
  );
};

export default InputField;
