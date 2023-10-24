import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Movies.module.css'; 

class Movies extends Component {
  state = {
    movies: [], 
    query: '', 
  };

  componentDidMount() {

    this.loadTrendingMovies();
  }

  loadTrendingMovies = async () => {
  
  };

    searchMovies = async () => {
      
  };

  handleSearchChange = (e) => {
    this.setState({ query: e.target.value });
  };

  render() {
    return (
      <div className={styles.movies}>
        <h1>Popular Movies</h1>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search for movies..."
            value={this.state.query}
            onChange={this.handleSearchChange}
          />
          <button onClick={this.searchMovies}>Search</button>
        </div>
        <ul className={styles.movieList}>
          {this.state.movies.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

Movies.propTypes = {
 
};

export default Movies;
