import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import { Link, useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react';
import { getOneGig } from '../../../services/gigService';
import AuthContext from '../../../contexts/authContext';

import './Details.css'

library.add(fas);

function Details() {
    const { gigId } = useParams();
    const [gig, setGig] = useState({});

    const { userId } = useContext(AuthContext);
    let isOwner = false;
    if(gig.owner) {
        isOwner = userId == gig.owner._id;
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
                <img src="/public/images/profilePlaceholder.jpg" alt="" />
                <h2>Username</h2>
                {!isOwner &&
                <div className='gigDetailsAsideButtons'>
                    <button className='btn1'>Hire</button>
                    <button className='btn1'>Contact</button>
                    <button className='btn2'><FontAwesomeIcon icon="fa-solid fa-heart" className='likeIcon' /></button>
                </div>}

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
        </div>
    )
}

export default Details