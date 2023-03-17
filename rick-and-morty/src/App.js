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
import CharacterList from "./Components/Characters/characterList";

import logo2 from "./Assests/logo1.png";

function App() {
  return (
    <div className="h-screen addBackground relative">
      <NavBar></NavBar>
      {/* <Hero></Hero> */}
      <CharacterList></CharacterList>
    </div>
  );
}

export default App;
