import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import './Email.css'
import { changeEmail } from '../../../services/userService';

function Email() {
    const {userId} = useParams();
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    function emailChangeHandler(event) {
        setEmail(event.target.value);
    }

    function submitHandler(event) {
        event.preventDefault();

        changeEmail(userId, email);
        navigate(`/profile`);
    }

    return (
        <form className='loginForm'>
            <h2>Set email adress</h2>
            <div>
                <label htmlFor="email">Email:</label>
                <input name='email' type="email" value={email} onChange={emailChangeHandler} />
            </div>
            <button type='submit' onClick={submitHandler}>Submit</button>
        </form>
    )
}

export default Email