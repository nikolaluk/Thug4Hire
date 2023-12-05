import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import './Stars.css'

library.add(fas);

function Stars () {
    return (
        <div className='stars'>
            <FontAwesomeIcon icon="fa-solid fa-star"/>
            <FontAwesomeIcon icon="fa-solid fa-star"/>
            <FontAwesomeIcon icon="fa-solid fa-star"/>
            <FontAwesomeIcon icon="fa-solid fa-star"/>
            <FontAwesomeIcon icon="fa-solid fa-star-half"/>    
        </div>
    )
}

export default Stars;