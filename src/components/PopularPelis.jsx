import React, { useEffect, useState } from 'react';

export const PopularPelis = () => {
  const [peliculas, setPeliculas] = useState([]); // Estado para guardar las películas

  // LLAMADA A LA API
  const getPeliculasApi = () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTVhMzNiM2Q2YTcxMmIyOGExMDEwMWU3NGQ4ZWE5YyIsIm5iZiI6MTczMjgxNTY0Mi42NTkyMTI2LCJzdWIiOiI2NzQ4YWEwMDE5OTJkNzEwZDNhY2JkMTEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.iRSeqWvg1Peg1aBFeyEnHrA83Fb7LYYf-butCoy2I9I',
      },
    };

    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
      .then((respuesta) => respuesta.json()) // Convertir la respuesta a JSON
      .then((resultado_final) => {
        console.log(resultado_final); // Inspeccionar la respuesta completa
        if (resultado_final && resultado_final.results) {
          setPeliculas(resultado_final.results); // Guardar las películas en el estado
        } else {
          console.error('No se encontraron resultados en la respuesta.');
        }
      })
      .catch((error) => {
        console.error('Error al obtener datos de la API:', error);
      });
  };

  // Usar useEffect para llamar a la API cuando el componente se monta
  useEffect(() => {
    getPeliculasApi();
  }, []);

  return (
    <>
      <h2 className="title">Mejores películas</h2>
      <div className="box">
        {peliculas.length > 0 ? (
          peliculas.slice(0, 6).map((pelicula) => (  // Limitamos a 6 películas
            <a href={`https://www.themoviedb.org/movie/${pelicula.id}`} target="_blank" rel="noopener noreferrer" key={pelicula.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
                alt={`Póster de ${pelicula.title}`}
              />
            </a>
          ))
        ) : (
          <p>Cargando películas...</p>
        )}
      </div>
    </>
  );
};
