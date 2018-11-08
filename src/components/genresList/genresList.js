import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGenreList, getSimilarMovies } from '../../duck/moviesListReducer';

let _ = require('lodash');

class GenresList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      genreList: [],
      similarList: [],
      selectGenreID: '',
    };
    this.handleGetGenreMovies = this.handleGetGenreMovies.bind(this);
  }

  componentDidMount() {
    this.props.getGenreList()
    .then((response) => {
      // console.log(response.value.data.genres)
      this.setState({ genreList: response.value.data.genres })
    })
    .catch((error) => {
      console.log(`Danger! ${ error }`)
    });
  }

  handleGetGenreMovies(id) {
    this.setState({ selectGenreID: id });
  }

  ////  Get similar movies list from selectdrop 
  getSelectGenres = () => {
    let { selectGenreID } = this.state;
    // console.log(`selectGenreID: ${ selectGenreID }`);
    this.props.getSimilarMovies(selectGenreID)
    .then((response) => {
      // console.log(response.value.data.results)
      this.setState({ similarList: response.value.data.results })
    })
    .catch((error) => {
      console.log(`Danger! ${ error }`)
    });
  }

  render() {
    let { genreList, similarList } = this.state
    console.log(this.state);

    let displayGeresList = genreList.map((value, index) => {
      // console.log(value, index)
      return(
        <option value={ value.id }>{ value.name }</option>
      )
    });

    let displaySimlarList = similarList.map((value, index) => {
      // console.log(value, index)
      return(
        <div className='trendingBox'>
          <p>{ value.title }</p>
          <img className='imageBox' src={`https://image.tmdb.org/t/p/w500` + value.poster_path } alt='broken'></img>
          <p>Rate: { value.vote_average }</p>
          <p>{ value.overview }</p>
        </div>
      )
    });

    return (
      <div>
        <p>GenresList</p>
        <form>
          <select onChange={ (e) => this.handleGetGenreMovies(e.target.value) }>
            { displayGeresList }
          </select>
          <button onClick={ () => this.getSelectGenres() }>Seach</button>
        </form>
        { displaySimlarList }
      </div>    
    );
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, { getGenreList, getSimilarMovies })(GenresList);