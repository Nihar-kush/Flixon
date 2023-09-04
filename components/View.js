import React, { useState } from "react";
import ViewCard from "./ViewCard";
import Section from "./Section";

export default function View({ movies }) {
  return (
    <div className="px-5 sm:px-20 mb-10 grid md:grid-cols-3 xl:grid-cols-4 3xl:flex flex-wrap justify-center gap-10 md:gap-10 xl:gap-20">
      {movies
        .filter((movie, idx) => idx < 14 && idx > 1)
        .map((movie, index) => {
          return <ViewCard  movie={movie} key={`card-${index}`} />;
        })}
    </div>
  );
}
