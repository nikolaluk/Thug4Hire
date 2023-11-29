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

  function titleChangeHandler(event) {
    setTitle(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    createGig(title);
    navigate('/catalog');
  }

  return (
    <form className='createForm'>
      <h2>Post A Gig</h2>
      <div>
        <label htmlFor="username">Title:</label>
        <input name='username' type="username" value={title} onChange={titleChangeHandler} />
      </div>
      <button type='submit' onClick={submitHandler}>Submit</button>
    </form>
  )
}

export default Login
