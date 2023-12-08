import { useContext, useEffect, useState } from 'react';
import { getOneUser } from '../../../services/userService';

import Stars from '../../shared/Stars/Stars';

import './Profile.css';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../../contexts/authContext';
import { getOneReview } from '../../../services/reviewService';

function Profile() {
    const navigate = useNavigate();

    const [user, setUser] = useState({});
    const [reviews, setReviews] = useState([]);
    const [reviewsAvg, setReviewsAvg] = useState(1);

    const {userId} = useContext(AuthContext);

    let gigs = <h2>No Gigs Yet</h2>;
    let reviewElement = <h2>No Reviews Yet</h2>;

    if(user.gigs) {
        if(user.gigs[0]){   
            gigs = user.gigs.map(gig => {
                return (
                    <Link to={`/gig/${gig._id}`} className='profileGig' key={gig._id}>
                        <h2>{gig.title}</h2>
                        <h2>{gig.type}</h2>
                    </Link>
                )
            })
        }

        if(reviews[0]) {
            reviewElement = reviews.map(review => {
                return (
                    <div key={review._id}>
                        <Stars data={review.rating}/>
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
                setUser(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [userId]);
    
    useEffect(() => {
        let reviewIds = [];
        let reviewsTemp = [];
    
        if (user.gigs) {
            for (let gig of user.gigs) {
                for (let reviewId of gig.reviews) {
                    reviewIds.push(reviewId);
                }
            }
    
            const fetchReviews = async () => {
                for (let id of reviewIds) {
                    try {
                        const data = await getOneReview(id);
                        reviewsTemp.push(data);
                    } catch (err) {
                        console.log(err);
                    }
                }
    
                let sum = 0;
                for (let review of reviewsTemp) {
                    sum += Number(review.rating);
                }
                
                setReviews(reviewsTemp);
                setReviewsAvg(sum / reviewsTemp.length);
            };
    
            fetchReviews();
        }
    }, [user]);

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
                    <p>Rating: {reviewsAvg.toFixed(2)}/5</p>
                    <Stars data={reviewsAvg}/>
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
                {reviewElement}
            </div>
        </div>
    )
}

export default Profile