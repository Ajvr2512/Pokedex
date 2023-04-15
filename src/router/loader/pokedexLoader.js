import { getAllPokemos } from "../../services/getAllPokemon";
import { getAllType } from "../../services/getAllTypes";
import { getPokemonByType } from "../../services/getPokemonByType";

const whichLoadIs = (url) => {
  if (!url.search) return 'all';
  else if (url.searchParams.get('pokemon_type')) return 'type';
  else if (url.searchParams.get('pokemon_name')) return 'name';
};

export const pokedexLoader = async ({ request }) => {
  const types = await getAllType();
  const url = new URL(request.url);
  const loadType = whichLoadIs(url);
  let pokemons;

  if (loadType === 'all') {
    pokemons = await getAllPokemos();
  } else if (loadType === 'type') {
    const type = url.searchParams.get('pokemon_type');
    pokemons = await getPokemonByType(type);
  } else if (loadType === 'name') {
    const name = url.searchParams.get('pokemon_name').toLowerCase();
    pokemons = await getAllPokemos();
    pokemons = pokemons.filter((pokemon) => pokemon.name.includes(name));
  }

  return { pokemons, types };
};
