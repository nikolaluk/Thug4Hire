import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import './Stars.css'

library.add(fas);

function Stars (props) {
    return (
        <div className='stars'>
            <FontAwesomeIcon icon="fa-solid fa-star"/>
            <FontAwesomeIcon icon="fa-solid fa-star"/>
            <FontAwesomeIcon icon="fa-solid fa-star"/>
            <FontAwesomeIcon icon="fa-solid fa-star"/>
            <FontAwesomeIcon icon="fa-solid fa-star"/>    
        </div>
    )
}

export default Stars;