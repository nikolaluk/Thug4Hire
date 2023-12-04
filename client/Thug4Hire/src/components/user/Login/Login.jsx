import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState } from 'react';

import './Login.css';
import AuthContext from '../../../contexts/authContext';

library.add(fas);

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { loginSubmitHandler } = useContext(AuthContext);

  function usernameChangeHandler(event) {
    setUsername(event.target.value);
  }

  function passwordChangeHandler(event) {
    setPassword(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();

    loginSubmitHandler({ username, password });
  }

  function changePasswordVisibility() {
    if(showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  }

  return (
    <form className='loginForm'>
      <h2>Log into your account</h2>
      <div>
        <label htmlFor="username">Username:</label>
        <input name='username' type="username" value={username} onChange={usernameChangeHandler} />
      </div>
      {!showPassword &&
        <div>
          <label htmlFor="password" className='fix'>Password:</label>
          <input name='password' type="password" value={password} onChange={passwordChangeHandler} />
          <FontAwesomeIcon icon="fa-solid fa-eye" className='loginIcon' onClick={changePasswordVisibility}/>
        </div>}

      {showPassword &&
        <div>
          <label htmlFor="password" className='fix'>Password:</label>
          <input name='password' type="text" value={password} onChange={passwordChangeHandler} />
          <FontAwesomeIcon icon="fa-solid fa-eye-slash" className='loginIcon'  onClick={changePasswordVisibility}/>
        </div>}
      <button type='submit' onClick={submitHandler}>Submit</button>
    </form>
  )
}

export default Login
