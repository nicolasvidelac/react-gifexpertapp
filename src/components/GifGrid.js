import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { loading, data } = useFetchGifs(category);
  console.log(data);

  return (
    <>
      <h3>{category}</h3>

      <div className="animate__animated animate__fadeIn">
        {loading && "Cargando.."}
      </div>

      <div className="card-grid">
        {data.map((img) => {
          return (
            <div className="card" key={img.id}>
              <img src={img.url} alt={img.title} />
              <p> {img.title}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
