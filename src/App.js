import { useState } from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import FilmCard from './copmonents/FilmCard';
import Pages from './copmonents/Pages';
// import { Homepage } from './pages/Homepage';
// import { Filmpage } from './pages/FilmPage';

function App() {

  const [filmSearch, setFilm] = useState('')
  const [data, setData] = useState([])
  const [result, setResult] = useState('Null')

  const getFilm = async () => {
    const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8&s=${filmSearch}`)
    const data = await response.json()
    setResult(data.totalResults)
    setData(data.Search)
  }

  return (
    <>
      <div className="App">
      <header className='header'>
        <p>Movie Catalog</p>
        <input onChange={(e)=> setFilm(e.target.value)} type='search' />
        <button onClick={getFilm}>Search</button>
        <div className='header_user'>
        <img src="https://img.icons8.com/ios-filled/50/000000/user.png" width={16} height={16} />
        <p>Dmitry Rakovich</p>
        <img src="https://img.icons8.com/material-rounded/24/000000/give-way.png" height={16} width={16}/>
        </div>
      </header>
      <div className='container'>
      <p>You searched for: {filmSearch}, {result} results found</p>
      <div className='container'>
        {data ?
          data.map((item) => {
            return (
              <FilmCard key={item.imdbID} film={item} />
            )
          })
          : <h1 style={{display:'block', textAlign: 'center'}}>No results found. Please enter a valid request</h1>
        }
      </div>
      </div>
      <Pages />
    </div>
    </>
  );
}

export default App;


// function App() {
//   return (
//     <>
//     <Routes>
//       <Route path='/' element={<Homepage />}/>
//       <Route  path='/pages/:page' element={<Filmpage />}/>
//     </Routes>
//     </>
//   )
// }

// export default App