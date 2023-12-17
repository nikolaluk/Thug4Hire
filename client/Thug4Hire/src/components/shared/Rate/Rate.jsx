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

    const { gigId } = useParams();
    const [text, setText] = useState('');
    const [selectedStars, setSelectedStars] = useState(0);
    const [constantSelectedStars, setConstantSelectedStars] = useState(0);


    function handleTextChange(event) {
        setText(event.target.value);
    }

    function handleStarClick(index) {
        setConstantSelectedStars(index + 1);
    }

    function handleStarMouseOver(index) {
        setSelectedStars(index + 1);
    }

    function handleStarMouseOut() {
        setSelectedStars(0);
    }

    function handleRateSubmit(rating, text) {
        submitGigRating(gigId, rating, text)
            .then(data => {
                if (data.error) {
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
                        className={`icon ${1 < selectedStars || 1 < constantSelectedStars ? 'active' : ''}`}
                        onMouseOver={() => handleStarMouseOver(1)}
                        onMouseOut={handleStarMouseOut}
                        onClick={() => handleStarClick(1)} />
                    <FontAwesomeIcon
                        key={2} icon="fa-solid fa-star"
                        className={`icon ${2 < selectedStars || 2 < constantSelectedStars ? 'active' : ''}`}
                        onMouseOver={() => handleStarMouseOver(2)}
                        onMouseOut={handleStarMouseOut}
                        onClick={() => handleStarClick(2)} />
                    <FontAwesomeIcon
                        key={3} icon="fa-solid fa-star"
                        className={`icon ${3 < selectedStars || 3 < constantSelectedStars ? 'active' : ''}`}
                        onMouseOver={() => handleStarMouseOver(3)}
                        onMouseOut={handleStarMouseOut}
                        onClick={() => handleStarClick(3)} />
                    <FontAwesomeIcon
                        key={4} icon="fa-solid fa-star"
                        className={`icon ${4 < selectedStars || 4 < constantSelectedStars ? 'active' : ''}`}
                        onMouseOver={() => handleStarMouseOver(4)}
                        onMouseOut={handleStarMouseOut}
                        onClick={() => handleStarClick(4)} />
                    <FontAwesomeIcon
                        key={5} icon="fa-solid fa-star"
                        className={`icon ${5 < selectedStars || 5 < constantSelectedStars ? 'active' : ''}`}
                        onMouseOver={() => handleStarMouseOver(5)}
                        onMouseOut={handleStarMouseOut}
                        onClick={() => handleStarClick(5)} />
                </div>

                <textarea name="text" id="text" cols="26" rows="3"
                    value={text}
                    onChange={handleTextChange}
                />

                <div className='rate-buttons'>
                    <button onClick={() => handleRateSubmit(constantSelectedStars, text)}>Submit</button>
                    <button onClick={propFunctions.data[0]}>Close</button>
                </div>
            </div>
        </>
    )
}

export default Rate;