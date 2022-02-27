import { useState } from 'react';
import './App.css';
import './media.css'
import FilmCard from './copmonents/FilmCard';
import Header from './copmonents/Header';
import Pages from './copmonents/Pages';

const lodash = require('lodash');

function App() {

  const [filmSearch, setFilm] = useState('')
  const [data, setData] = useState([])
  const [result, setResult] = useState('')

  const getFilm = async (page = 1) => {
    const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8&s=${filmSearch}&page=${page}`)
    const data = await response.json()
    setResult(data.totalResults)
    const filmSort = lodash.uniqBy(data.Search,'imdbID')
    setData(filmSort)
  }

  return (
    <>
      <div className="App">
        <Header getFilm={getFilm} setFilm={setFilm}/>
      <div className='container'>
      {result && <p>You searched for: {filmSearch}, {result} results found</p>}
      <div className='container'>
        {data.length ?
          data.map((item) => {
            return (
              <FilmCard key={item.imdbID} film={item} />
            )
          })
          : <h1 style={{display:'block', textAlign: 'center'}}>No results found. Please enter a valid request</h1>
        }
      </div>
      </div>
      <Pages result={result} getFilm={getFilm} />
    </div>
    </>
  );
}

export default App;