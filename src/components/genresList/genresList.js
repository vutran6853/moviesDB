import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGenreList } from '../../duck/moviesListReducer';
const _ = require('lodash');

class GenresList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      getGenreList: []  
    };
    this.handleGetGenreMovies = this.handleGetGenreMovies.bind(this);
  }

  componentDidMount() {
    this.props.getGenreList()
    .then((response) => {
      console.log(response.value.data.genres)
      this.setState({ getGenreList: response.value.data.genres })
    })
  }

  handleGetGenreMovies(genre) {
    console.log(`genre${ genre }`)
    console.log('hit')
  }

  render() {
    let { getGenreList } = this.state
    console.log(getGenreList);


    let displayGenreList = getGenreList.map((value, index) => {
      // console.log(value, index)
      
      return(
          <option onChange={ () => this.handleGetGenreMovies(value.name) }>{value.name}</option>
      )
    })

    return (
      <div>
        
        <p>GenresList</p>
       
        <select>
          { displayGenreList }
        </select>

     
      </div>    
    );
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, { getGenreList })(GenresList);