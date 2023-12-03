import { jwtDecode } from 'jwt-decode';
import { useEffect, useState } from 'react';
import { getOneUser } from '../../../services/userService';

import Stars from '../../shared/Stars/Stars';

import './Profile.css';
import { Link } from 'react-router-dom';

function Profile() {
    const [user, setUser] = useState({});

    let gigs = <h2>No Gigs Yet</h2>;

    if(user.gigs) {
        gigs = user.gigs.map(gig => {
            return (
                <Link to={`/gig/${gig._id}`} className='profileGig' key={gig._id}>
                    <h2>{gig.title}</h2>
                    <h2>{gig.type}</h2>
                </Link>
            )
        })
    }

    useEffect(() => {
        const userId = jwtDecode(localStorage.getItem('accessToken'))._id;
        getOneUser(userId)
            .then((data) => {
                setUser(data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    return (
        <div className='profile'>
            <div className='profileLeft'>
                <img src="/public/images/profilePlaceholder.jpg" alt="" />
                <h2>{user.username}</h2>
                
                <hr />

                <div className='profileRating'>
                    <p>Rating: 4.5/5</p>
                    <Stars/>
                </div>
                
                <div className='profileButtons'>
                    <button>Change picture</button>
                    <button>Change username</button>
                </div>
            </div>
            <div className='profileCenter'>
                <h2>Gigs:</h2>
                <hr />
                {gigs}
            </div>
            <div className='profileRight'>
                <h2>Reviews:</h2>
                <hr />
            </div>
        </div>
    )
}

export default Profile