import "./App.css";
import logo1 from "./Assests/logo1.png";
import ButtonFilled from "./Components/UI/Buttons/buttonFilled";
import Button from "./Components/UI/Buttons/button";
import Link from "./Components/UI/Link/link";
import NavBar from "./Components/UI/Nav/nav";
import Hero from "./Components/Hero/Hero";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { github } from "@fortawesome/free-solid-svg-icons";

// import { faGit } from "@fortawesome/free-regular-svg-icons";

import logo2 from "./Assests/logo1.png";

function App() {
  return (
    <div className="h-screen addBackground relative">
      <NavBar></NavBar>
      <Hero></Hero>
      <div className="flex align-middle justify-center m-12">
        <FontAwesomeIcon icon="fa-brands fa-github" />
        <i className="fa-solid fa-users"></i>
      </div>
    </div>
  );
}

export default App;
