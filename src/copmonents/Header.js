function Header({ getFilm, setFilm }) {

  return (
    <header className='header'>
      <p>Movie Catalog</p>
      <input onKeyUp={getFilm} onChange={(e) => setFilm(e.target.value)} placeholder='enter more than two characters' type='search' />
      <div className='header_user'>
        <img src="https://img.icons8.com/ios-filled/50/000000/user.png" width={16} height={16} alt='user-pic' />
        <p>Dmitry Rakovich</p>
        <img src="https://img.icons8.com/material-rounded/24/000000/give-way.png" height={16} width={16} alt='user-menu' />
      </div>
    </header>
  )
}

export default Header