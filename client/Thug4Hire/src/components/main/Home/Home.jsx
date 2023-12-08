import { useContext } from 'react';
import AuthContext from '../../../contexts/authContext';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <div className='home'>
            <h1 className='overText'>Welcome To Thug4Hire</h1>
            <h1 className='underText'>Welcome To Thug4Hire</h1>
            <div>
                {!isAuthenticated &&
                    <>
                        <Link to={`/login`} className='homeButtons'>Login</Link>
                        <Link to={`/register`} className='homeButtons'>Register</Link>
                    </>}

                {isAuthenticated &&
                    <>
                        <Link to={`/catalog`} className='homeButtons'>Hire</Link>
                        <Link to={`/create`} className='homeButtons'>Offer</Link>
                    </>}
            </div>
        </div>
    )
}

export default Home;