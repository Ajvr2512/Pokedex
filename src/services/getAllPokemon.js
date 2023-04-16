import axios from "axios";

export const getAllPokemos = async () => {
  try {
    const res = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=300');
    return res.data.results;
  } catch (error) {
    console.error(error);
  }
};
