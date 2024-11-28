import React, { useEffect, useState } from 'react';

export const PopularSeries = () => {


  const [series, setSeries] = useState([]); // Estado para guardar las películas

  // LLAMADA A LA API
  const getSeriesApi = () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTVhMzNiM2Q2YTcxMmIyOGExMDEwMWU3NGQ4ZWE5YyIsIm5iZiI6MTczMjgxNTY0Mi42NTkyMTI2LCJzdWIiOiI2NzQ4YWEwMDE5OTJkNzEwZDNhY2JkMTEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.iRSeqWvg1Peg1aBFeyEnHrA83Fb7LYYf-butCoy2I9I',
      },
    };

    fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', options)
      .then((respuesta) => respuesta.json()) // Convertir la respuesta a JSON
      .then((resultado_final) => {
        console.log(resultado_final); // Inspeccionar la respuesta completa
        if (resultado_final && resultado_final.results) {
          setSeries(resultado_final.results); // Guardar las películas en el estado
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
    getSeriesApi();
  }, []);


  return (
    <>
        <h2 className="">Mejores series</h2>
            <div className="box">
              {series.length > 0 ? (
                series.slice(0, 6).map((serie) => (  // Limitamos a 6 películas
                  <a href={`https://www.themoviedb.org/tv/${serie.id}`} target="_blank" rel="noopener noreferrer" key={serie.id}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                      alt={`Póster de ${serie.title}`}
              />
            </a>
          ))
        ) : (
          <p>Cargando películas...</p>
        )}   
            </div>
    </>
  )
}
