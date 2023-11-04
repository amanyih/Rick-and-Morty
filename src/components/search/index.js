import Input from "../input";

const Search = ({ placeholder, handler }) => {
  return (
    <div className="w-full flex flex-col items-center flex-1 px-20 mb-20">
      <h1 className="text-4xl font-bold text-center mb-10">Search</h1>
      <Input
        type="text"
        placeholder={placeholder}
        className="mx-5 px-6 py-2 text-4xl rounded-full border-2 border-black"
        onChange={handler}
      />
    </div>
  );
};

export default Search;
