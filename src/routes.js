import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/dashboard';
import MoviesList from './components/movies/moviesList';

export default (
    <div>
        <Switch>
            <Route exact path='/' component={ Dashboard } ></Route>
            <Route path='/movies' component={ MoviesList } ></Route>
        </Switch>
    </div>
)