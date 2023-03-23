import { Fragment } from "react";

const ButtonFilled = (props) => {
  return (
    <div className=" bg-lightBlue  rounded-full  hover:cursor-pointer px-4 py-1.5 hover:bg-cyan-700 active:translate-y-0.5 shadow-2xl">
      {props.children}
    </div>
  );
};

export default ButtonFilled;
