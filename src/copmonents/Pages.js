import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function Pages() {
  return (
    <div className='pages'>
    {pages.map((page) => {
      return (
        <Link key={page} to={`page/${page}`}>
          {page}
        </Link>
      )
    })}
    </div>
  )
}

export default Pages