import { useState } from "react"

const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function Pages({ getFilm, result }) {
  const [thisPage, setThisPage] = useState(null)
  const handleGetFilm = (page) => {
    getFilm(page)
    setThisPage(page)
  }

  return (
    <div className='pages'>
      {thisPage > 1 ?
        <button onClick={() => handleGetFilm(thisPage - 1)}>◀️</button> :
        <button style={{ cursor: 'no-drop' }} disabled='disabled' onClick={() => handleGetFilm(thisPage - 1)}>◀️</button>
      }
      {pages.map((page) => {
        return (
          <button onClick={() => { handleGetFilm(page) }} key={page}>
            {page}
          </button>
        )
      })}
      {console.log(result)}
      {result <= 10 ?
        <button style={{ cursor: 'no-drop' }} disabled='disabled' onClick={() => handleGetFilm(thisPage + 1)}>▶️</button> :
        <button onClick={() => handleGetFilm(thisPage + 1)}>▶️</button>}
    </div>
  )
}

export default Pages