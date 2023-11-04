import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layout";
import CharacterLayout from "./layout/character";
import LocationLayout from "./layout/location";
import EpisodeLayout from "./layout/episode";
import { Provider } from "./components";

import {
  CharachterPage,
  EpisodePage,
  HomePage,
  LocationPage,
  CharacterDetail,
  EpisodeDetail,
  LocationDetail,
  ErrorPage,
} from "./pages";
import { Route as route } from "./constants";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path={route.CHARACTER} element={<CharacterLayout />}>
          <Route index element={<CharachterPage />} />
          <Route path=":id" element={<CharacterDetail />} />
        </Route>
        <Route path={route.EPISODE} element={<EpisodeLayout />}>
          <Route index element={<EpisodePage />} />
          <Route path=":id" element={<EpisodeDetail />} />
        </Route>
        <Route path={route.LOCATION} element={<LocationLayout />}>
          <Route index element={<LocationPage />} />
          <Route path=":id" element={<LocationDetail />} />
        </Route>
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

function App() {
  return (
    <Provider>
      <RouterProvider router={router} />;
    </Provider>
  );
}

export default App;
