import { Link } from "react-router-dom";
import { Route } from "../../constants";
import LogoImage from "../../assets/image/logo1.png";
const Logo = () => {
  return (
    <Link to={Route.HOME}>
      <span>
        <img className="h-20" src={LogoImage} alt="rick and morty logo" />
      </span>
    </Link>
  );
};

export default Logo;
