import React from 'react';
import { Link } from 'react-router-dom';

function RenderSignupPage(props) {
  return (
    <div>
      <h1>Sign Up for Microfund Here!</h1>
      <form>
        <h2>Register Here</h2>
        <h4>Username:</h4>
        <input name="username" type="text" />
        <h4>Email:</h4>
        <input name="email" type="email" />
        <h4>Password:</h4>
        <input name="password" type="password" />

        <button>Join Microfund</button>
      </form>
      <p>already a member of Microfund?</p>
      <h3>
        {' '}
        <Link to="/login"> Login Here</Link>{' '}
      </h3>
    </div>
  );
}
export default RenderSignupPage;
