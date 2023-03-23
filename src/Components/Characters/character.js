import Card from "../UI/Card/card";
const Character = (props) => {
  return (
    <div className=" rounded-xl max-w-xs overflow-hidden bg-white mb-8 hover:cursor-pointer hover:scale-105 transition-transform shadow-2xl">
      <img className=" w-full" src={props.img} />
      <div className="mt-6 ml-4 mb-2">
        <h1 className=" text-2xl">{props.name}</h1>
        <h3 className=" text-xl">{props.status}</h3>
        {/* <h3 className=" text-xl">{props.species}</h3> */}
      </div>
    </div>
  );
};

export default Character;
