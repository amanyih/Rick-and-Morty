const Card = (props) => {
  return (
    <div className=" rounded-lg p-2 overflow-hidden">{props.children}</div>
  );
};

export default Card;
