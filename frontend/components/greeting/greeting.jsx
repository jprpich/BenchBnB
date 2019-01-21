import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  if (currentUser) {
    return (
      <div>
        <h2>Welcome, {currentUser.username}</h2>
        <button onClick={logout}>Logout</button>
      </div>
    )
  } else {
    return (
      <div>
        <Link to='/signup'>Sign Up</Link>
        <br/>
        <Link to='/login'>Log In</Link>
        <br/>
      </div>
    )
  }
};

export default Greeting;