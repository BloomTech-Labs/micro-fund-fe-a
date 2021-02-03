import React, { useRef, useState } from 'react';
import * as yup from 'yup';
import { Button } from 'antd';
import { Link, useHistory } from 'react-router-dom';
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
    border: 3px solid ${props => props.theme.primaryColor};
    height: 2em;
    color: ${props => props.theme.primaryColor};
  }
  .link {
    color: ${props => props.theme.primaryColor};
  }
  .link:hover {
    color: black;
  }
`;

const SignupInput = styled.input`
  border: 2px solid gray;
  margin: 0.5em;
`;

function RenderSignupPage(props) {
  let signupForm = useRef(null);

  const initialValues = {
    username: '',
    email: '',
    password: '',
  };
  // initalize errors

  const initialDisabled = true;
  const initialUsers = [];

  const [values, setValues] = useState(initialValues);
  const { push } = useHistory();

  const [disabled, setDisabled] = useState(initialDisabled);
  const [users, setUsers] = useState(initialUsers);
  // setstate for errors

  const postNewUser = () => {};

  const inputChange = evt => {
    const { name, value } = evt.target;
  };

  const newUser = {
    username: values.username,
    email: values.email,
    password: values.password,
    id: Date.now(),
  };

  const submit = evt => {
    evt.preventDefault();
    postNewUser(newUser);
  };

  return (
    <div>
      <Nav />
      <SignupHeader>Sign Up</SignupHeader>
      <SignupAreaContainer>
        <Logo alt="Microfund Logo" src={logo} />
        <form
          onSubmit={submit}
          ref={el => {
            signupForm = el;
          }}
        >
          <SignupHeaders>
            Username:
            <SignupInput
              value={values.username}
              onChange={inputChange}
              name="username"
              type="text"
            />
          </SignupHeaders>
          <SignupHeaders>
            Email:
            <SignupInput
              value={values.email}
              onChange={inputChange}
              name="email"
              type="email"
            />
          </SignupHeaders>
          <SignupHeaders>
            Password:
            <SignupInput
              value={values.password}
              onChange={inputChange}
              name="password"
              type="password"
            />
          </SignupHeaders>
          <JoinButton>
            <Button disabled={disabled}>Join Microfund</Button>
          </JoinButton>
        </form>
        <p>already a member of Microfund?</p>
        <LoginButton>
          <Button>
            {' '}
            <Link className="link" to="/login">
              Login Here
            </Link>
          </Button>{' '}
        </LoginButton>
      </SignupAreaContainer>
    </div>
  );
}
export default RenderSignupPage;
