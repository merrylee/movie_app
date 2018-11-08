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
        setTimeout(() => {
            this.setState(
                {
                    movies: [
                {
                    title: "Matrix",
                    poster: "http://sasw.or.kr/zbxe/files/attach/images/172/835/436/3089db3ee6b91b2ba0daa8d5a3bfceb8.jpg"
                },
                {
                    title: "Oldboy",
                    poster: "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000077/77772/77772_1000.jpg"
                },
                {
                    title: "Star Wars",
                    poster: "https://t1.daumcdn.net/movie/73d078e4c3d27c1d5d2240b4981dc94980676be1"
                },

                        {
                            title: "Trainspotting",
                            poster: "https://t1.daumcdn.net/movie/73d078e4c3d27c1d5d2240b4981dc94980676be1"
                        }
                    ]
                }
                )
        }, 3000)
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
