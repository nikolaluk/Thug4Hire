import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import { Link, useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react';
import { getOneGig } from '../../../services/gigService';
import AuthContext from '../../../contexts/authContext';

import './Details.css'
import Rate from '../../shared/Rate/Rate';

library.add(fas);

function Details() {
    const { gigId } = useParams();
    const [gig, setGig] = useState({});
    const [showEmail, setShowEmail] = useState(false);
    const [showRate, setShowRate] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const { userId } = useContext(AuthContext);
    let isOwner = false;
    if (gig.owner) {
        isOwner = userId == gig.owner._id;
    }

    function showEmailHandler() {
        if (showEmail) {
            setShowEmail(false);
        } else {
            setShowEmail(true);
        }
    }

    function showRateHandler() {
        if (showRate) {
            setShowRate(false);
        } else {
            setShowRate(true);
        }
    }

    useEffect(() => {
        getOneGig(gigId)
            .then((gig) => {
                setGig(gig);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [gigId])

    return (
        <div className='gigDetails'>
            <div className='gigDetailsAside'>
                {gig.owner && gig.owner.imageUrl ?
                    <img src={gig.owner.imageUrl} alt="" /> :
                    <img src="/images/profilePlaceholder.jpg" alt="" />}

                {gig.owner && <h2>{gig.owner.username}</h2>}

                {!isOwner &&
                    <div className='gigDetailsAsideButtons'>
                        <button onClick={showEmailHandler} className='btn1'>Contact</button>
                        <button onClick={showRateHandler} className='btn1'>Rate</button>
                    </div>}
                {showEmail && <span>{gig.owner.email}</span>}
                {errorMessage && <span className='error'>{errorMessage}</span>}

                {isOwner &&
                    <div className='gigDetailsAsideButtons'>
                        <Link to={`/edit/${gig._id}`} className='btn1 gigDetailsButtons'>Edit</Link>
                        <Link to={`/delete/${gig._id}`} className='btn1 gigDetailsButtons'>Delete</Link>
                    </div>}
            </div>

            <hr />

            <div className='gigDetailsMain'>
                <div className='upper'>
                    <div className='upper-left'>
                        <h2>{gig.title}</h2>
                        <span>{gig.type}</span>
                    </div>
                    <h2>{gig.price}$</h2>
                </div>
                <div className='lower'>
                    <p>{gig.description}</p>
                </div>
            </div>

            {showRate && (
                <Rate data={[showRateHandler, setErrorMessage]}/>
            )}
        </div>
    )
}

export default Details