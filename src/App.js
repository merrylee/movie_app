import React, { Component } from 'react';
import PropTypes from 'prop-types'
import logo from './logo.svg';
import './App.css';
import Movie from './Movie'


class App extends Component {

    // Render: componentWillMount() => render() => componentDidMount()
    // Update: componentWillReceiveProps() => shouldComponentUpdate() => componentWillUpdate() => render => componentDidUpdate()

    state = {}


    componentDidMount() {
        fetch('https://yts.am/api/v2/list_movies.json?quality=3D')
            .then(response => response.json())
            .then(json => console.log(json))
            .catch(err => console.log(err))
    }

    _renderMovies = () => {
        const movies =   this.state.movies.map((movie, index) => {
            return <Movie title={movie.title} poster={movie.poster} key={index}/>
        })
        return movies
    }

    render() {
        console.log('did render')
        return (
          <div className="App">
              {this.state.movies ? this._renderMovies() : 'Loading'}
            App.js
          </div>
        );
  }
}

export default App;
