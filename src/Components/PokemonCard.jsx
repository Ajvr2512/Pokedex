import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loader from './Loader';
import {pokemonColors} from '../services/pokemonColors';
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

  const handleClickNavigate = () => {
    navigate(`/pokedex/${poke.id}`);
  };

  useEffect(() => {
    const loadPokemon = async () => {
      const pokemonInfo = await getPokemonById(pokemonData.url);
      setPoke(pokemonInfo);
    };
    loadPokemon();
  }, []);
  return (
    <div>
      {poke ? (
        <article onClick={handleClickNavigate} className={`CardPoke ${pokemonColors[poke.types[0].type.name]}hover:cursor-pointer`}>
          <header>
            <div className="imgPke">
              <img src={poke.sprites.other.home.front_default} alt={poke.name} />
            </div>
          </header>

          <div>
            <section className="InfoPoke">
              <h2>{poke.name}</h2>
              <p className="InfoPokeP">{poke.types[0].type.name}</p>
              <p>Tipo</p>
            </section>
            <div>
              <div className="PokeInfo1">
                <section>
                  <h3>{poke.stats[0].stat.name}</h3>
                  <p>{poke.stats[0].base_stat}</p>
                </section>
                <section>
                  <h3>{poke.stats[1].stat.name}</h3>
                  <p>{poke.stats[1].base_stat}</p>
                </section>
              </div>
              <div className="PokeInfo2">
                <section>
                  <h3>{poke.stats[2].stat.name}</h3>
                  <p>{poke.stats[2].base_stat}</p>
                </section>
                <section>
                  <h3>{poke.stats[3].stat.name}</h3>
                  <p>{poke.stats[3].base_stat}</p>
                </section>
              </div>
            </div>
          </div>
        </article>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default PokemonCard;
