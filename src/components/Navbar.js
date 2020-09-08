import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeProvider'

// Context

const Navbar = () => {
  const [darkMode, changeTheme] = useContext(ThemeContext)

  return (
    <div className='container element'>
      <nav className='flex space-between'>
        <div className='title'>
          <Link to='/'>Where in the world?</Link>
        </div>

        <button onClick={() => changeTheme()}>
          {darkMode ? (
            <i className='fas fa-moon fa-sm' />
          ) : (
            <i className='far fa-moon fa-sm' />
          )}
          Dark Mode
        </button>
      </nav>
    </div>
  )
}

export default Navbar
