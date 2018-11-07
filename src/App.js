import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie'

const movies = [
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
    }
]

class App extends Component {
  render() {
    return (
      <div className="App">

          {movies.map(movie => {
             return <Movie title={movie.title} poster={movie.poster} />
          })}

      </div>
    );
  }
}

export default App;
