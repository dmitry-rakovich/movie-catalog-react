import { useState, useEffect } from "react"


function Pages({ getFilm, result }) {
  const [thisPage, setThisPage] = useState(1)
  const [pages, setArrPages] = useState([])

  const handleGetFilm = (page) => {
    getFilm(page)
    setThisPage(page)
  }
  const showPages = () => {
    const arr = new Array(Math.ceil(result/10)).fill(1, 0, Math.ceil(result/10)).map((el, i) => el += i)
    setArrPages(arr.slice(thisPage-1, thisPage+9));
  }

  useEffect(() => {
    showPages()
  }, [thisPage]);
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
    {pages.length < 10 ?
    <button style={{cursor:'no-drop'}} disabled='disabled' onClick={()=>handleGetFilm(thisPage + 1)}>▶️</button> :
    <button onClick={()=>handleGetFilm(thisPage + 1)}>▶️</button>}
    </div>
  )
}

export default Pages