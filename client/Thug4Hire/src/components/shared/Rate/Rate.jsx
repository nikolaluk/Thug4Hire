import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import './Rate.css';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { submitGigRating } from '../../../services/reviewService';

library.add(fas);

function Rate(props) {
    const propFunctions = props;

    const {gigId} = useParams();
    const [selectedStars, setSelectedStars] = useState(0);

    function handleStarMouseOver(index) {
        setSelectedStars(index + 1);
    }

    function handleStarMouseOut() {
        setSelectedStars(0);
    }

    function handleRateSubmit(rating) {
        submitGigRating(gigId, rating)
            .then(data => {
                if(data.error) {
                    propFunctions.data[1](data.message);
                }
            })
            .catch(err => console.log(err))
            propFunctions.data[0]();
    }
 
    return (
        <>
            <div className='backdrop' onClick={propFunctions.data[0]}></div>
            <div className='ratingPopup'>
                <div>
                    <FontAwesomeIcon
                        key={1} icon="fa-solid fa-star"
                        className={`icon ${1 < selectedStars ? 'active' : ''}`}
                        onMouseOver={() => handleStarMouseOver(1)}
                        onMouseOut={handleStarMouseOut}
                        onClick={() => handleRateSubmit(1)} />
                    <FontAwesomeIcon
                        key={2} icon="fa-solid fa-star"
                        className={`icon ${2 < selectedStars ? 'active' : ''}`}
                        onMouseOver={() => handleStarMouseOver(2)}
                        onMouseOut={handleStarMouseOut} 
                        onClick={() => handleRateSubmit(2)} />
                    <FontAwesomeIcon
                        key={3} icon="fa-solid fa-star"
                        className={`icon ${3 < selectedStars ? 'active' : ''}`}
                        onMouseOver={() => handleStarMouseOver(3)}
                        onMouseOut={handleStarMouseOut}
                        onClick={() => handleRateSubmit(3)} />
                    <FontAwesomeIcon
                        key={4} icon="fa-solid fa-star"
                        className={`icon ${4 < selectedStars ? 'active' : ''}`}
                        onMouseOver={() => handleStarMouseOver(4)}
                        onMouseOut={handleStarMouseOut}
                        onClick={() => handleRateSubmit(4)} />
                    <FontAwesomeIcon
                        key={5} icon="fa-solid fa-star"
                        className={`icon ${5 < selectedStars ? 'active' : ''}`}
                        onMouseOver={() => handleStarMouseOver(5)}
                        onMouseOut={handleStarMouseOut}
                        onClick={() => handleRateSubmit(5)} />
                </div>

                <button onClick={propFunctions.data[0]}>Close</button>
            </div>
        </>
    )
}

export default Rate;