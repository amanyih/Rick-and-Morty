import rick from "../../../Assests/confusedRick.png";

const CharacterNotFound = () => {
  return (
    <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2">
      <img src={rick} className=" max-h-96" alt="" />
      <h1 className="text-8xl text-lightGreen">404: Charater Not Found</h1>
    </div>
  );
};

export default CharacterNotFound;
