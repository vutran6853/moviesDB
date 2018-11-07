import React, { Component } from 'react';
import { connect } from 'react-redux';
import { trendingMoviesList, getGenreList } from '../../duck/moviesListReducer';
import css from './moviesList.scss';
import { Link } from 'react-router-dom';

class MoviesList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      trendingList: [],
     };
     this.handleMoreInfo = this.handleMoreInfo.bind(this);
  }

  componentDidMount() {
    this.props.trendingMoviesList()
    .then((response) => {
      // console.log(response.value.data.results)
      this.setState({ trendingList: response.value.data.results })
    })
    .catch((error) => {
      console.log(`Danger!!`, error)
    });

    this.props.getGenreList()
    .then((response) => {
      console.log(response.value.data)
    })
  }

  //// todo later for user id to save it 
  handleMoreInfo(id) {
    console.log(`id: ${id}`);
  }


  render() {
    let { trendingList } = this.state

    let displayTrendingMoviesList = trendingList.map((value, index) => {
      // console.log(`value:`, value, 'index:', index)
      return(
        <div key={ value.id } className='trendingBox'>
          <p>{ value.title }</p>
          <img className='imageBox' src={`https://image.tmdb.org/t/p/w500` + value.poster_path } alt='broken'></img>
          <button>more info</button>
          <button onClick={ () => this.handleMoreInfo(value.id) }>+</button>
        </div>
      )
    });

    return (
      <div>
        <p>Movies List</p>
        { displayTrendingMoviesList }
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state
}
export default connect(mapStateToProps, { trendingMoviesList, getGenreList })(MoviesList);