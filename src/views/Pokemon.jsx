import React from 'react';
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
  return (
    <div>
      <p>El pokemon {id}</p>
    </div>
  );
};

export default Pokemon;
