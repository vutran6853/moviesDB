import axios from 'axios';

//// Inital Value
const MOVIESLIST = 'MOVIESLIST';

//// Initial State
const initialState = {
  moviesList: []
}

//// Initial Action Creator for Payload
export function getAllCoinData() {
  return {
      type: MOVIESLIST,
      payload: axios.get('https://api.iextrading.com/1.0/ref-data/symbols')
  }
}

//// Handle state changes
export default function cryptoReducer(state = initialState, action) {
  switch(action.type) {
    case `${ MOVIESLIST }_FULFILLED`: 
    return {
        ...state,
        moviesList: action.payload.data
    }
    default:
    return state;
  }
}