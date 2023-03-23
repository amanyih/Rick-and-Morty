const Location = (props) => {
  return (
    <div className=" text-4xl text-white border-2 border-gree shadow-2xl mb-6 px-8 py-5 rounded-2xl max-w-sm mx-3">
      <p className="text-2xl">{props.name}</p>
      <p className="text-3xl">{props.type}</p>
      <h1 className="text-xl">Dimenison: {props.dimension}</h1>
    </div>
  );
};

export default Location;
