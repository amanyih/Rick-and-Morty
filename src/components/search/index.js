import Input from "../input";

const Search = (props) => {
  return (
    <div className="mb-10 text-5xl">
      Search
      <Input
        type="text"
        placeholder="Search Characters"
        className="mx-5 px-6 py-2 text-4xl rounded-full border-2 border-black"
      />
      <div className="my-5">
        <span className=" text-3xl">
          Status
          <span>
            <input
              className="peer invisible"
              id="check1"
              radioGroup="first"
              type="checkbox"
            />
            <label
              className="peer-checked:bg-lightGreen text-black px-6 py-1 bg-slate-200 rounded-full"
              htmlFor="check1"
            >
              alive
            </label>
          </span>
        </span>
      </div>
    </div>
  );
};

export default Search;
