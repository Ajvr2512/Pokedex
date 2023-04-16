import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const getPokemonById = async (id) => {
  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
const Pokemon = () => {
  const { id } = useParams();
  const [poke, setPoke] = useState(null);

  useEffect(() => {
    const loadPokemon = async () => {
      const pokemonInfo = await getPokemonById(id);
      setPoke(pokemonInfo);
    };
    loadPokemon();
  }, []);
  return (
    <div>
      {poke && (
        <div>
          <div className="imgeDet">
            <img src={poke.sprites.other.home.front_default} alt={poke.name} />
          </div>
          <section className="namePokedel">
            <h2>{poke.name}</h2>
            <p>#{id}</p>
          </section>
          <div>
            <section>
              <h3>Weight</h3>
              <p>{poke.weight}</p>
            </section>
            <section>
              <h3>Height</h3>
              <p>{poke.height}</p>
            </section>
          </div>
          <div>
            <section>
              <h3>TYPE</h3>
              <p>{poke.types.name}</p>
            </section>
            <section>
              {poke.stats.map((stat) => (
                <section className="ListInfoPke" key={stat.stat.name}>
                  <h3>{stat.stat.name.toUpperCase()}</h3>
                  <p>{stat.base_stat}</p>
                </section>
              ))}
            </section>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pokemon;
