import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Nav from '../Landing/Nav';
import logo from '../../../images/piggybank.png';

const SignupHeader = styled.div`
  border-top: 5px solid gray;
  font-size: 45px;
  color: ${props => props.theme.primaryColor};
  padding: 15px;
`;

const SignupAreaContainer = styled.div`
  border: 3px solid gray;
  color: solid gray;
  padding: 1em;
  font-size: 25px;
  margin: 0.5em 20em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  align-content: space-between;
`;

const SignupHeaders = styled.div`
  font-size: 25px;
  color: solid gray;
  text-align: right;
  margin-right: 4.5em;
`;

const Logo = styled.img`
  width: 20%;
  margin: -1em;
`;

const JoinButton = styled.div`
  button {
    background-color: ${props => props.theme.primaryColor};
    color: white;
    font-size: 25px;
    padding: 0em 1em 0em 1em;
    margin: 1em;
    height: 2em;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  align-content: space-between;
`;

const LoginButton = styled.div`
  button {
    font-size: 25px;
    padding: 0em 1em 0em 1em;
    border-color: ${props => props.theme.primaryColor};
    height: 2em;
    color: ${props => props.theme.primaryColor};
  }
  color: ${props => props.theme.primaryColor};
`;

const SignupInput = styled.input`
  border: 2px solid gray;
  margin: 0.5em;
`;

function RenderSignupPage(props) {
  return (
    <div>
      <Nav />
      <SignupHeader>Sign Up</SignupHeader>
      <SignupAreaContainer>
        <Logo alt="Microfund Logo" src={logo} />
        <form>
          <SignupHeaders>
            Username:
            <SignupInput name="username" type="text" />
          </SignupHeaders>
          <SignupHeaders>
            Email:
            <SignupInput name="email" type="email" />
          </SignupHeaders>
          <SignupHeaders>
            Password:
            <SignupInput name="password" type="password" />
          </SignupHeaders>
          <JoinButton>
            <Button>Join Microfund</Button>
          </JoinButton>
        </form>
        <p>already a member of Microfund?</p>
        <LoginButton>
          <Button to="/login"> Login Here</Button>{' '}
        </LoginButton>
      </SignupAreaContainer>
    </div>
  );
}
export default RenderSignupPage;
