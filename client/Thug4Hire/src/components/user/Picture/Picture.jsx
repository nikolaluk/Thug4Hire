import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { changeImage } from '../../../services/userService';
import './Picture.css';

function Picture() {
    const { userId } = useParams();
    const [image, setImage] = useState(null);
    const navigate = useNavigate();

    const imageChangeHandler = (event) => {
        setImage(event.target.files.item(0));
    };

    function submitHandler(event) {
        event.preventDefault();

        changeImage(userId, image);
        navigate('/profile')
    }

    return (
        <form className='loginForm'>
            <h2>Paste image URL:</h2>
            <div>
                <input name='image' type="file" onChange={imageChangeHandler} />
            </div>
            <button type='submit' onClick={submitHandler}>Submit</button>
        </form>
    )
}

export default Picture