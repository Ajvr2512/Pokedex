import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const getPokemonById = async (url) => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
const PokemonCard = ({ pokemonData }) => {
  const [poke, setPoke] = useState(null);
  const navigate = useNavigate();
  const loadPokemon = async () => {
    const pokemonInfo = await getPokemonById(pokemonData.url);
    setPoke(pokemonInfo);
  };
  const handleClickNavigate = () => {
    navigate(`/pokedex/${poke.id}`);
  };
  useEffect(() => {
    loadPokemon();
  }, []);
  return (
    <div>
      {poke && (
        <article onClick={handleClickNavigate} className="hover:cursor-pointer">
          <header>
            <div>
              <img src={poke.sprites.front_default} alt={poke.name} />
            </div>
          </header>

          <section>
            <section>
              <h2>{poke.name}</h2>
              <p>{poke.types[0].type.name}</p>
              <p>Tipo</p>
            </section>
            <section>
              {poke.stats.map((stat) => (
                <section key={stat.stat.name}>
                  <h3>{stat.stat.name.toUpperCase()}</h3>
                  <p>{stat.base_stat}</p>
                </section>
              ))}
            </section>
          </section>
        </article>
      )}
    </div>
  );
};

export default PokemonCard;
