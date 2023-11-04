import { Taken } from "../../assets/svg";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className=" h-screen flex flex-col items-center justify-center flex-1">
      <img className="h-80" src={Taken} alt="" />
      <h1 className=" text-9xl font-bold text-center text-lightBlue">404</h1>
      <h2 className="text-5xl font-bold text-center text-lightBlue ">
        Page Not Found
      </h2>

      <Link to={"/"}>
        <h3 className=" text-3xl font-bold text-center text-lightBlue mt-20">
          Home Page
        </h3>
      </Link>
    </div>
  );
};

export default ErrorPage;
