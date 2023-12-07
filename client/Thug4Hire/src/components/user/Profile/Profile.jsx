import { useContext, useEffect, useState } from 'react';
import { getOneUser } from '../../../services/userService';

import Stars from '../../shared/Stars/Stars';

import './Profile.css';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../../contexts/authContext';

function Profile() {
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    const {userId} = useContext(AuthContext);

    let reviewData = [];
    let gigs = <h2>No Gigs Yet</h2>;
    let reviews = <h2>No Reviews Yet</h2>

    if(user.gigs.length > 0) {
        gigs = user.gigs.map(gig => {
            return (
                <Link to={`/gig/${gig._id}`} className='profileGig' key={gig._id}>
                    <h2>{gig.title}</h2>
                    <h2>{gig.type}</h2>
                </Link>
            )
        })

        for(let gig of user.gigs) {
            if(gig.reviews) {
                for(let rev of gig.reviews) {
                    reviewData.push(rev);
                }
            }
        }
        
        if(reviewData[0]) {
            reviews = reviewData.map(review => {
                return (
                    <div key={review}>
                        <Stars/>
                    </div>
                )
            })
        }
    }

    function navigateToPicture() {
        navigate(`/picture/${userId}`)
    }

    function navigateToEmail() {
        navigate(`/email/${userId}`)
    }

    useEffect(() => {
        getOneUser(userId)
            .then((data) => {
                setUser(data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [userId]);

    return (
        <div className='profile'>
            <div className='profileLeft'>
                {user.imageUrl ?
                <img src={user.imageUrl} alt="" /> :
                <img src="/images/profilePlaceholder.jpg" alt="" />
                }
                <h2>{user.username}</h2>
                {user.email ?
                <span>{user.email}</span> :
                <span>No email set.</span>
                }
                <hr />

                <div className='profileRating'>
                    <p>Rating: 4.5/5</p>
                    <Stars/>
                </div>
                
                <div className='profileButtons'>
                    <button onClick={navigateToPicture}>Set picture</button>
                    <button onClick={navigateToEmail}>Set email</button>
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
                {reviews}
            </div>
        </div>
    )
}

export default Profile