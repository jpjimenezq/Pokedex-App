import React from "react";
import PixelTrail from "./PixelTrail";

function Hero() {
  return (
    <div className="h-screen w-full relative overflow-hidden flex items-center justify-center px-4">
      <PixelTrail
        gridSize={50}
        trailSize={0.1}
        maxAge={250}
        interpolate={5}
        color="#00d8ff"
        gooeyFilter={{ id: "custom-goo-filter", strength: 2 }}
        className="opacity-60 z-0"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none space-y-6">
        <h1 className="text-6xl sm:text-6xl md:text-7xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 font-pixel animate-glow text-center">
          Pokedex App
        </h1>

        <p className="text-lg sm:text-xl text-black max-w-xs sm:max-w-md md:max-w-lg text-center drop-shadow-md">
          Explora todos los Pokémon
        </p>
      </div>
    </div>
  );
}

export default Hero;
