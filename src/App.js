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
import CharactersLayout from "./Layout/CharactersLayout";
// import Location from "./Components/Locations/location";
// import Episode from "./Components/Episodes/episodes";
import CharacterDetail from "./Components/Characters/characterDetail";
// import { CharacterDetailLoader } from "./Components/Characters/characterDetail";
import CharacterNotFound from "./Components/UI/Error/error";
import EpisodesLayout from "./Layout/EpisodesLayout";
import EpisodesList from "./Components/Episodes/episodesList";
import LocationLayout from "./Layout/LocationLayout";
import LocationList from "./Components/Locations/LocationsList";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Home />}></Route>
      <Route path="/characters" element={<CharactersLayout />}>
        <Route index element={<CharacterList />}></Route>
        <Route
          path=":id"
          errorElement={<CharacterNotFound />}
          element={<CharacterDetail />}
        ></Route>
      </Route>
      <Route path="/locations" element={<LocationLayout />}>
        <Route index element={<LocationList />}></Route>
      </Route>
      <Route path="/episodes" element={<EpisodesLayout />}>
        <Route index element={<EpisodesList />}></Route>
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
