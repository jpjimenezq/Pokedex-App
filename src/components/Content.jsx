"use client"

import { useEffect, useState } from "react";
import { getPokemons } from "../services/api";
import CardPokemon from "../components/CardPokemon";

function Content() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await getPokemons();
      setPokemons(data);
      setLoading(false);
    }

    fetchData();
  }, []);

  if (loading) return <p className="text-center">Cargando...</p>;

  return (
    <div>
      <CardPokemon pokemons={pokemons} />
    </div>
  );
}

export default Content;
