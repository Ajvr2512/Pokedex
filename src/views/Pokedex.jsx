import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import PokemonCard from '../Components/PokemonCard';
import { usePagination } from '../hooks/usePagination';
import { Form } from 'react-router-dom';

const Pokedex = () => {
  const { user } = useContext(UserContext);
  const [pokeName, setPokeName] = useState('');
  const [pokeType, setPokeType] = useState('');
  const { pokemons, types } = useLoaderData();
  const pokemonsPagination = usePagination(pokemons, 10);
  const hanleNameChange = (e) => {
    setPokeName(e.target.value);
    setPokeType('');
  };
  const hanleTypeChange = (e) => {
    setPokeType(e.target.value);
    setPokeName('');
  };

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
      <div>
        <Form>
          <div className="flex felx-row justify-between">
            <h3 className="text-red-500">Filter for search</h3>
            <div>
              <input
                type="text"
                name="pokemon_name"
                className="shadow-md border border-black"
                value={pokeName}
                onChange={hanleNameChange}
              />
              <select name="pokemon_type" value={pokeType} onChange={hanleTypeChange}>
                <option value="" disabled>
                  --Chose a type--
                </option>
                {types.map((type) => (
                  <option key={type.url} value={type.name}>
                    {type.name}
                  </option>
                ))}
              </select>
            </div>
            <button className="bg-red-500 text-white p-2 hover:bg-red-400 rounded">
              Search
            </button>
          </div>
        </Form>
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
