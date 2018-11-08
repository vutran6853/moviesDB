import axios from 'axios';

const movies_key = process.env.REACT_APP_MOVIES_KEY;

//// Inital Value
const TRENDINGLIST = 'TRENDINGLIST';
const GENRELIST = 'GENRELIST';
const SIMILARMOVIES = 'SIMILARMOVIES';
const TVPOPULAR = 'TVPOPULAR';

//// Initial State
const initialState = {
  trendingMoviesList: [],
  genreList: [],
  similarMoviesList: [],
  tvpopular: []
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

export function getSimilarMovies(id) {
  console.log(id);
  return {
    type: SIMILARMOVIES,
    payload: axios.get(`https://api.themoviedb.org/3/movie/${ id }/similar?api_key=${ movies_key }&language=en-US&page=1`)
  }
}

export function getTVpopular(id) {
  return {
    type: TVPOPULAR,
    payload: axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${ movies_key }&language=en-US&page=${ id }`)
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
    case `${ SIMILARMOVIES }_FULFILLED`:
    return {
      ...state,
      similarMoviesList: action.payload.data
    }
    case `${ TVPOPULAR }_FULFILLED`:
    return {
      ...state,
      tvpopular: action.payload.data
    }
    default:
    return state;
  }
}