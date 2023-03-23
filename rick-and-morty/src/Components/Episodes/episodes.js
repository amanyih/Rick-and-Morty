const Episode = (props) => {
  return (
    <div className=" text-4xl text-white border-2 border-gree shadow-2xl mb-6 px-8 py-5 rounded-2xl max-w-sm mx-3">
      <span className="text-2xl">{props.episode}</span>:{" "}
      <span className="text-3xl">{`   ${props.name}`}</span>
      <h1 className="text-xl">Air Date: {props.air_date}</h1>
    </div>
  );
};

export default Episode;
