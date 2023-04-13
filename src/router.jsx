import { createBrowserRouter } from 'react-router-dom';
import Pokedex from './views/Pokedex';
import PokedexGeneral from './Components/PokedexGeneral';
import Pokemon from './views/Pokemon';
import Home from './views/Home';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/Pokedex',
    element: <PokedexGeneral />,
    children: [
      {
        path: ':id',
        element: <Pokemon />,
      },
      {
        index: true,
        element: <Pokedex />,
      },
    ],
  },
]);
