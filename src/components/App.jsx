import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './Home/Home'; 
import Movies from './Movies/Movies';
import MovieDetails from './MovieDetails/MovieDetails'; 
class App extends Component {
  render() {
    return (
      <div>
     
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movies" component={Movies} />
          <Route path="/movies/:movieId" component={MovieDetails} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
