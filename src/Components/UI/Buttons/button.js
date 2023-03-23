// import { Children } from "react";

const Button = (props) => {
  return (
    <div className=" border-lightBlue border-2 rounded-full  hover:cursor-pointer px-4 py-2 shadow-2xl hover:bg-lightGreen hover:text-violet-800 hover:cursor-pointer active:translate-y-0.5 text-darkGreen">
      {props.children}
    </div>
  );
};

export default Button;
