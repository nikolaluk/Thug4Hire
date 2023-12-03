import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { editGig, getOneGig } from '../../../services/gigService';

function Edit() {
    const { gigId } = useParams();

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
        editGig(gigId, title, type, price, description);
        navigate('/catalog');
    }

    useEffect(() => {
        getOneGig(gigId)
            .then((data) => {
                setTitle(data.title);
                setType(data.type);
                setPrice(data.price);
                setDescription(data.description);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return(
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

export default Edit;