import { useState, useEffect } from "react"


function Pages({ getFilm, result }) {
  const [thisPage, setThisPage] = useState(0)
  const [pages, setArrPages] = useState([])

  const handleGetFilm = (page) => {
    getFilm(page)
    setThisPage(page)
  }

  return (
    <div className='pages'>
      {thisPage > 1 ? 
    <button onClick={()=>handleGetFilm(thisPage - 1)}>◀️</button> :
    <button style={{cursor:'no-drop'}} disabled='disabled' onClick={()=>handleGetFilm(thisPage - 1)}>◀️</button>
    }
    {pages.map((page) => {
      return (
        <button className="btn-page" onClick={()=>{handleGetFilm(page)}} key={page}>
          {page}
        </button>
      )
    })}
    {result <= 10 ?
    <button style={{cursor:'no-drop'}} disabled='disabled' onClick={()=>handleGetFilm(thisPage + 1)}>▶️</button> :
    <button onClick={()=>handleGetFilm(thisPage + 1)}>▶️</button>}
    </div>
  )
}

export default Pages