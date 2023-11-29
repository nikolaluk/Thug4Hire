// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fas } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { createGig } from '../../../services/gigService';
import { useNavigate } from 'react-router-dom';

import './Create.css'

// library.add(fas);

function Login() {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');

    function titleChangeHandler(event) {
        setTitle(event.target.value);
    }
    function typeChangeHandler(event) {
        setType(event.target.value);
    }
    function priceChangeHandler(event) {
        setPrice(event.target.value);
    }
    function descriptionChangeHandler(event) {
        setDescription(event.target.value);
    }

    function submitHandler(event) {
        event.preventDefault();
        createGig(title, type, price, description);
        navigate('/catalog');
    }

    return (
        <form className='createForm'>
            <h2>Post A Gig</h2>
            <div>
                <label htmlFor="title">Title:</label>
                <input name='title' type="text" value={title} onChange={titleChangeHandler} />
            </div>
            <div>
                <label htmlFor="type" className='fix'>Type:</label>
                <input name='type' type="text" value={type} onChange={typeChangeHandler} />
            </div>
            <div>
                <label htmlFor="price" className='fix'>Price:</label>
                <input name='price' type="number" value={price} onChange={priceChangeHandler} />
            </div>
            <div>
                <label htmlFor="description" className='fix'>Description:</label>
                <input name='description' type="text" value={description} onChange={descriptionChangeHandler} />
            </div>
            <button type='submit' onClick={submitHandler}>Submit</button>
        </form>
    )
}

export default Login
