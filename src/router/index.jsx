import { createBrowserRouter } from 'react-router-dom';
import Pokedex from '../views/Pokedex';
import PokedexGeneral from '../Components/PokedexGeneral';
import Pokemon from '../views/Pokemon';
import Home from '../views/Home';
import ProtectedRoute from '../Components/ProtectedRoute';
import { pokedexLoader } from './loader/pokedexLoader';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/pokedex',
    element: (
      <ProtectedRoute>
        <PokedexGeneral />
      </ProtectedRoute>
    ),
    children: [
      {
        path: ':id',
        element: <Pokemon />,
      },
      {
        index: true,
        element: <Pokedex />,
        loader: pokedexLoader,
      },
    ],
  },
]);
