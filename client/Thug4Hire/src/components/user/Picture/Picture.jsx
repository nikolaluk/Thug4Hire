import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { changeImage } from '../../../services/userService';
import './Picture.css';

function Picture() {
    const {userId} = useParams();
    const [imageUrl, setImageUrl] = useState('');
    const navigate = useNavigate();

    function imageUrlChangeHandler(event) {
        setImageUrl(event.target.value);
    }

    function submitHandler(event) {
        event.preventDefault();

        changeImage(userId, imageUrl);
        navigate(`/profile`);
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