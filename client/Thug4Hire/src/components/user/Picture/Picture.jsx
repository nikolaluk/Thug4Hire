import { useState } from 'react';
import './Picture.css';
import { useParams } from 'react-router-dom';
import { changeImage } from '../../../services/userService';

function Picture() {
    const {userId} = useParams();
    const [imageUrl, setImageUrl] = useState('');

    function imageUrlChangeHandler(event) {
        setImageUrl(event.target.value);
    }

    function submitHandler(event) {
        event.preventDefault();

        changeImage(userId, imageUrl);
    }

    return (
        <form className='loginForm'>
            <h2>Paste image URL:</h2>
            <div>
                <label htmlFor="username">Image:</label>
                <input name='username' type="username" value={imageUrl} onChange={imageUrlChangeHandler} />
            </div>
            <button type='submit' onClick={submitHandler}>Submit</button>
        </form>
    )
}

export default Picture