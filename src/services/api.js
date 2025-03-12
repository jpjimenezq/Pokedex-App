import axios from "axios";

const API_URL = process.env.API_URL_POKEAPI || "https://pokeapi.co/api/v2";

export const poke_api = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
});

export const getPokemons = async () => {
  try {
    const response = await poke_api.get("/pokemon?limit=808");
    const pokemonList = response.data.results;

    const pokemonDetails = await Promise.all(
      pokemonList.map((pokemon) => poke_api.get(pokemon.url))
    );

    return pokemonDetails.map((poke) => ({
      id: poke.data.id,
      name: poke.data.name,
      sprite: poke.data.sprites.front_default,
      types: poke.data.types.map((t) => t.type.name),
    }));
  } catch (error) {
    console.error("Error fetching Pokémon data:", error);
    return [];
  }
};
