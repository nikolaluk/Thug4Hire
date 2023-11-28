import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react'
import './Register.css'

library.add(fas);

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    function usernameChangeHandler(event) {
        setUsername(event.target.value);
    }

    function passwordChangeHandler(event) {
        setPassword(event.target.value);
    }

    function repeatPasswordChangeHandler(event) {
        setRepeatPassword(event.target.value);
    }

    function submitHandler(event) {
        event.preventDefault();

        console.log(username);

        //Add repass
        //register({username, email, password})
        //  .then((data) => console.log(data))  
        //  .catch((err) => console.log(err));
    }

    return (
        <form className='registerForm'>
            <h2>Create an account</h2>
            <div>
                <label htmlFor="username">Username:</label>
                <input name='username' type="username" value={username} onChange={usernameChangeHandler} />
            </div>
            <div>
                <label htmlFor="password"  className='fix'>Password:</label>
                <input name='password' type="password" value={password} onChange={passwordChangeHandler} />
                <FontAwesomeIcon icon="fa-solid fa-eye" className='registerIcon'/> 
            </div>
            <div>
                <label htmlFor="password">Repeat password:</label>
                <input name="password" type="password" value={repeatPassword} onChange={repeatPasswordChangeHandler} />
                <FontAwesomeIcon icon="fa-solid fa-eye" className='registerIcon'/>
            </div>
            <button type='submit' onClick={submitHandler}>Submit</button>
        </form>
    )
}

export default Register