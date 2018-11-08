import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTVpopular } from '../../duck/moviesListReducer';

class TV extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      tvPopularList: [],
      pageNumber: [1, 2, 3]
    };
  }

  componentDidMount() {
    this.props.getTVpopular(this.state.pageNumber)
    .then((response) => {
      // console.log(response)
      this.setState({ tvPopularList: response.value.data.results })
    })
    .catch((error) => {
      console.log(`Danger!!`, error)
    });
  }

  render() {
    let { tvPopularList } = this.state;

    let displayTVpopular = tvPopularList.map((value, index) => {
      // console.log(value, index)
      return(
        <div className='trendingBox'>
          <p>{ value.title }</p>
          <img className='imageBox' src={`https://image.tmdb.org/t/p/w500` + value.poster_path } alt='broken'></img>
          <p>Rate: { value.vote_average }</p>
          <p>{ value.overview }</p>
        </div>
      )
    })

    return (
      <div>
        <p>TV</p>
        { displayTVpopular }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, { getTVpopular })(TV);