import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../contexts/UserContext';
import axios from 'axios';
import PokemonCard from '../Components/PokemonCard';
import { usePagination } from '../hooks/usePagination';

const getAllPokemos = async () => {
  try {
    const res = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=30');
    return res.data.results;
  } catch (error) {
    console.error(error);
  }
};
const Pokedex = () => {
  const { user } = useContext(UserContext);
  const [pokemons, setPokemon] = useState([]);
  const pokemonsPagination = usePagination(pokemons, 10);

  const loadAllPokemons = async () => {
    const allPokemos = await getAllPokemos();
    setPokemon(allPokemos);
  };
  useEffect(() => {
    loadAllPokemons();
  }, []);
  return (
    <div className="w-full p-5">
      <p>
        <span className="text-red-500 font-semibold">Bienvenido {user}, </span>
        aqui encontraras tu pokemon favorito
      </p>
      <div className="flex flex-row gap-2">
        {pokemonsPagination.pages.map((page) => (
          <button
            key={page}
            onClick={() => pokemonsPagination.changePageTo(page)}
            className={pokemonsPagination.currentPage === page ? 'text-red-500' : ''}
          >
            {page}
          </button>
        ))}
      </div>
      <section>
        {pokemonsPagination.listSlice.map((pokemon) => (
          <PokemonCard key={pokemon.url} pokemonData={pokemon} />
        ))}
      </section>
    </div>
  );
};
export default Pokedex;
