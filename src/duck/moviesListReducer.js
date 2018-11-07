import axios from 'axios';

const movies_key = process.env.REACT_APP_MOVIES_KEY;

//// Inital Value
const TRENDINGLIST = 'TRENDINGLIST';
const GENRELIST = 'GENRELIST';

//// Initial State
const initialState = {
  trendingMoviesList: [],
  genreList: [],
}

//// Initial Action Creator for Payload
export function trendingMoviesList() {
  return {
      type: TRENDINGLIST,
      payload: axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${ movies_key }`)
  }
}

export function getGenreList() {
  return {
    type: GENRELIST,
    payload: axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${ movies_key }&language=en-US`)
  }
}

//// Handle state changes
export default function moviesListReducer(state = initialState, action) {
  switch(action.type) {
    case `${ TRENDINGLIST }_FULFILLED`: 
    return {
        ...state,
        trendingMoviesList: action.payload.data.results
    }
    case `${ GENRELIST }_FULFILLED`:
    return {
      ...state,
      genreList: action.payload.data
    }
    default:
    return state;
  }
}