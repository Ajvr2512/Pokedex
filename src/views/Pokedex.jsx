import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import PokemonCard from '../Components/PokemonCard';
import { usePagination } from '../hooks/usePagination';
import { Form } from 'react-router-dom';

const Pokedex = () => {
  const { user } = useContext(UserContext);
  const { pokemons, types } = useLoaderData();
  const [pokeName, setPokeName] = useState('');
  const [pokeType, setPokeType] = useState('');
  const [quantity, setQuantity] = useState(15);
  const pokemonsPagination = usePagination(pokemons, quantity);
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
      <p className=" text-center text-2xl">
        <span className="text-red-500 font-semibold">Bienvenido {user}, </span>
        aqui encontraras tu pokemon favorito
      </p>
      <Form>
        <div className="searchText">
          <h3 className="">Filter for search</h3>
          <div>
            <input
              type="text"
              name="pokemon_name"
              className="shadow-md border border-black"
              value={pokeName}
              onChange={hanleNameChange}
              placeholder="Type name"
            />
            <select
              type="text"
              name="pokemon_type"
              value={pokeType}
              className="shadow-md border border-black ml-2"
              onChange={hanleTypeChange}
            >
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
      <div className="ContainerButton">
        <button className="ButtonPreNext" onClick={pokemonsPagination.previousPage}>Previous </button>
        {pokemonsPagination.totalPages > 20
          ? ''
          : pokemonsPagination.pages.map((page) => (
              <button
                onClick={() => pokemonsPagination.changePageTo(page)}
                className={"buttonPage " + (page === pokemonsPagination.currentPage ? "ButtonAct" : "")}
                key={page}
              >
                {page}
              </button>
            ))}
        <button className="ButtonPreNext" onClick={pokemonsPagination.nextPage}> Next</button>
        <select
          name="pagination"
          value={quantity.toString()}
          onChange={(e) => setQuantity(+e.target.value)}
          className="ring-2 ring-red-500 ring-inset"
        >
          <option value="4">4</option>
          <option value="8">8</option>
          <option value="12">12</option>
          <option value="16">16</option>
          <option value="20">20</option>
        </select>
      </div>
      <div>
      </div>
      <section className="PokeCard">
        {pokemonsPagination.listSlice.map((pokemon) => (
          <PokemonCard key={pokemon.url} pokemonData={pokemon} />
        ))}
      </section>
    </div>
  );
};
export default Pokedex;
