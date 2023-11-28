import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

import { login } from '../../../services/userService';

import './Login.css';

library.add(fas);

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function usernameChangeHandler(event) {
    setUsername(event.target.value);
  }

  function passwordChangeHandler(event) {
    setPassword(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();

    console.log(username);
    console.log(password);
    login({ username, password })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }

  return (
    <form className='loginForm'>
      <h2>Log into your account</h2>
      <div>
        <label htmlFor="username">Username:</label>
        <input name='username' type="username" value={username} onChange={usernameChangeHandler} />
      </div>
      <div>
        <label htmlFor="password" className='fix'>Password:</label>
        <input name='password' type="password" value={password} onChange={passwordChangeHandler} />
        <FontAwesomeIcon icon="fa-solid fa-eye" className='loginIcon' />
      </div>
      <button type='submit' onClick={submitHandler}>Submit</button>
    </form>
  )
}

export default Login
