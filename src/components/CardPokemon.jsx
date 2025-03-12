import React from "react";
import { types } from "util";

function CardPokemon({ pokemons }) {
  return (
    <div>
      <h1 className="text-4xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 font-pixel">
        Pokemones disponibles
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {pokemons.length > 0 ? (
          pokemons.map((pokemon) => (
            <div
              key={pokemon.id}
              className="bg-white shadow-md rounded-2xl p-4 flex flex-col items-center border border-gray-200 transition-transform transform hover:scale-105"
            >
              <img
                src={pokemon.sprite}
                alt={pokemon.name}
                className="w-24 h-24 object-contain"
              />
              <h2 className="text-lg font-semibold capitalize">
                {pokemon.name}
              </h2>
              <p className="text-gray-600 text-sm">
                Tipo: {pokemon.types.join(", ")}
              </p>
              <p>{console.log(types.length)}</p>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No hay Pokémon disponibles
          </p>
        )}
      </div>
    </div>
  );
}

export default CardPokemon;
