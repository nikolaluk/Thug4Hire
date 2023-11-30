import { useContext } from 'react'
import './Header.css'

import { Link } from 'react-router-dom'
import AuthContext from '../../../contexts/authContext'

function Header() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <header>
      <Link to={"/"} className='headerHome'>
        <h2>Thug4Hire</h2>
      </Link>

      {isAuthenticated && (
        <div className='headerLinks'>
          <Link to={"/catalog"} className='headerLink'>Hire</Link>
          <Link to={"/create"} className='headerLink'>Offer</Link>
          <Link to={"/profile"} className='headerLink'>Profile</Link>
          <Link to={"/logout"} className='headerLink'>Logout</Link>
        </div>
      )}

      {!isAuthenticated && (
        <div className='headerLinks'>
          <Link to={"/login"} className='headerLink'>Login</Link>
          <Link to={"/register"} className='headerLink'>Register</Link>
        </div>
      )}

    </header>
  )
}

export default Header
