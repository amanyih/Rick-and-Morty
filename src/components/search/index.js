import Input from "../input";

const Search = ({ placeholder }) => {
  return (
    <div className="mb-10 text-5xl">
      Search
      <Input
        type="text"
        placeholder={placeholder}
        className="mx-5 px-6 py-2 text-4xl rounded-full border-2 border-black"
      />
    </div>
  );
};

export default Search;
