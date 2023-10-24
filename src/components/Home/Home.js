import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

function Home() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    async function fetchPopularMovies() {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/trending/movie/week?api_key=ТВІЙ_API_КЛЮЧ'
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPopularMovies(data.results);
      } catch (error) {
        console.error('Error fetching popular movies:', error);
      }
    }

    fetchPopularMovies();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Популярні фільми</h1>
      <ul className={styles.list}>
        {popularMovies.map((movie) => (
          <li key={movie.id} className={styles.item}>
            <Link to={`/movies/${movie.id}`} className={styles.link}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
