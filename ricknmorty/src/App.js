import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CharactersView from './Views/CharactersView';
import CharacterDetailsView from "./Views/CharacterDetailsView";
import { CharactersProvider } from './Contexts/CharactersContext';
import Navbar from './Components/Navbar'
const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <CharactersProvider>
      <Navbar/>
      <CharactersView />
    </CharactersProvider>,
  },
  {
    path: 'characters',
    element: (
      <CharactersProvider>
        <Navbar />
        <CharactersView />
      </CharactersProvider>
    ),
  },
  {
    path: "Character/:id",
    element: 
    <>
      <Navbar/>
      <CharacterDetailsView/>
    </>
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
