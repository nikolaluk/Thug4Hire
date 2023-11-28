import './Header.css'

import { Link } from 'react-router-dom'

function Header() {

    return (
      <header>
        <Link to={"/"} className='headerHome'>
            <h2>Thug4Hire</h2>
        </Link>
            <div className='headerLinks'>
                <Link to={"/login"} className='headerLink'>Login</Link>
                <Link to={"/register"} className='headerLink'>Register</Link>
            </div>
      </header>
    )
  }
  
export default Header
  