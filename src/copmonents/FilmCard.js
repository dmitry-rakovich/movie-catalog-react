import React from 'react'

const FilmCard = ({film}) => {
  return (
    <div className='film_card'>
        {film.Poster === 'N/A' ?
        <div className='no_poster'>No poster</div> 
      : <img className='poster_img' src={film.Poster} alt='poster' width={200} height={300}></img>}
        <span>Name: {film.Title}</span>
        <span>Year: {film.Year}</span>
        <span>imdbID: {film.imdbID}</span>
        <span>Type: {film.Type}</span>
    </div>
  )
}

export default FilmCard