import axios from "axios";

export const getPokemonByType = async (type) => {
  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/type/${type}`);
    return res.pokemon.map((pokeData) => pokeData.pokemon);
  } catch (error) {
    console.log(error);
  }
};
