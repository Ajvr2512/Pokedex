import axios from "axios";

export const getPokemonByType = async (type) => {
  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/type/${type}`);
    return res.data.pokemon.map((DataPoke) => DataPoke.pokemon);
  } catch (error) {
    console.log(error);
  }
};
