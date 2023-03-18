import "./App.css";
// import { faGit } from "@fortawesome/free-regular-svg-icons";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./Layout/rootLayOut";
import Home from "./Pages/Home";
import CharacterList from "./Components/Characters/characterList";
import Location from "./Components/Locations/location";
import Episode from "./Components/Episodes/episodes";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Home />}></Route>
      <Route path="/characters" element={<CharacterList />}></Route>
      <Route path="/locations" element={<Location />}></Route>
      <Route path="/episodes" element={<Episode />}></Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
