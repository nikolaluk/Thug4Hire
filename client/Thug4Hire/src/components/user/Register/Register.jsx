import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState } from 'react'

import './Register.css'
import AuthContext from '../../../contexts/authContext';

library.add(fas);

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
    const [repeatPassword, setRepeatPassword] = useState('');

    const [showPassword, setShowPassword] = useState(false);
    const [showRepeatPassword, setShowRepeatPassword] = useState(false);

    const { registerSubmitHandler } = useContext(AuthContext);

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

        registerSubmitHandler({ username, password, repeatPassword })
            .then(data => {
                if (data.error) {
                    setErrorMessage(data.message);
                }
            }).catch(err => {
                console.log(err);
            });
    }

    function changePasswordVisibility() {
        if (showPassword) {
            setShowPassword(false);
        } else {
            setShowPassword(true);
        }
    }

    function changeRepeatPasswordVisibility() {
        if (showRepeatPassword) {
            setShowRepeatPassword(false);
        } else {
            setShowRepeatPassword(true);
        }
    }

    return (
        <form className='registerForm'>
            <h2>Create an account</h2>
            <div>
                <label htmlFor="username">Username:</label>
                <input name='username' type="username" value={username} onChange={usernameChangeHandler} />
            </div>
            {!showPassword &&
                <div>
                    <label htmlFor="password" className='fix'>Password:</label>
                    <input name='password' type="password" value={password} onChange={passwordChangeHandler} />
                    <FontAwesomeIcon icon="fa-solid fa-eye" className='registerIcon' onClick={changePasswordVisibility} />
                </div>}
            {showPassword &&
                <div>
                    <label htmlFor="password" className='fix'>Password:</label>
                    <input name='password' type="text" value={password} onChange={passwordChangeHandler} />
                    <FontAwesomeIcon icon="fa-solid fa-eye-slash" className='registerIcon' onClick={changePasswordVisibility} />
                </div>}

            {!showRepeatPassword &&
                <div>
                    <label htmlFor="password">Repeat password:</label>
                    <input name="password" type="password" value={repeatPassword} onChange={repeatPasswordChangeHandler} />
                    <FontAwesomeIcon icon="fa-solid fa-eye" className='registerIcon' onClick={changeRepeatPasswordVisibility} />
                </div>}
            {showRepeatPassword &&
                <div>
                    <label htmlFor="password">Repeat password:</label>
                    <input name="password" type="text" value={repeatPassword} onChange={repeatPasswordChangeHandler} />
                    <FontAwesomeIcon icon="fa-solid fa-eye-slash" className='registerIcon' onClick={changeRepeatPasswordVisibility} />
                </div>}
            {errorMessage &&
                <span>{errorMessage}</span>}
            <button type='submit' onClick={submitHandler}>Submit</button>
        </form>
    )
}

export default Register