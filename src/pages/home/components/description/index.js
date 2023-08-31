import { Input } from "../../../../components";
const Description = () => {
  return (
    <div className="w-1/2">
      <h1 className="text-9xl mb-24">
        Rick & <br /> Morty API
      </h1>
      <h2 className="text-5xl border-l-8 border-lightBlue pl-5 mb-16">
        Find your favorite characters, episode and locations
      </h2>
      <Input
        type="text"
        placeholder="Search"
        className="px-8 py-4 text-5xl rounded-full border-2 border-black"
      />
    </div>
  );
};

export default Description;
