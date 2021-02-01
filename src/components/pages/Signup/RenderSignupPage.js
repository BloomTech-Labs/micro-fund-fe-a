import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/microLogo.png';
import styled from 'styled-components';

const SignupStyle = styled.div`
  h1 {
    color: ${props => props.theme.primaryColor};
  }
  button {
    background-color: ${props => props.theme.primaryColor};
    color: white;
  }
`;

function RenderSignupPage(props) {
  return (
    <div>
      <SignupStyle>
        <h1>Sign Up for Microfund Here!</h1>
        <form>
          <h2>Register Here</h2>
          <img src={logo} alt="MicroFund Logo" className="header-logo" />
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
      </SignupStyle>
    </div>
  );
}
export default RenderSignupPage;
