import React, { useState, useEffect } from 'react';


const MovieDetails = ({ match }) => {
  const { movieId } = match.params;
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const apiKey = '9a4b9e4760b7564e10a80d0c72f50665'; // Підставте свій API ключ

    // Отримання деталей фільму з API за `movieId`
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`)
      .then(response => response.json())
      .then(data => setMovie(data))
      .catch(error => console.error('Error fetching movie details:', error));
  }, [movieId]);

  if (movie === null) {
    // Рендеріть лоадер або повідомлення про завантаження
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={`https://api.themoviedb.org/3/movie/{movieId}/${movie.poster_path}`} alt={movie.title} />
      <p>{movie.overview}</p>
      {/* Додайте інші деталі фільму за потреби */}
    </div>
  );
};

export default MovieDetails;
