import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/dashboard';
import MoviesList from './components/movies/moviesList';
import GenresList from './components/genresList/genresList';

export default (
  <div>
    <Switch>
      <Route exact path='/' component={ Dashboard } ></Route>
      <Route path='/movies' component={ MoviesList } ></Route>
      <Route path='/genres' component={ GenresList } ></Route>

    </Switch>
  </div>
)