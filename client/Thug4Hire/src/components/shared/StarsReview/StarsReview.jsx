import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import './StarsReview.css';

library.add(fas);

function StarsReview(data) {
    const rating = Number(data.data);
    const starsToDisplay = Array.from({length: rating/1});
    for(let i = 1; i <= starsToDisplay.length; i++) {
        starsToDisplay[i-1] = i;
    }

    return (
        <div className='stars-review'>
            {starsToDisplay.map(index => {
                return (<FontAwesomeIcon icon="fa-solid fa-star" key={index}/>)
            })}
            {rating % 1 >= 0.5 && 
            <FontAwesomeIcon icon="fa-solid fa-star-half"/>}
        </div>
    )
}

export default StarsReview;