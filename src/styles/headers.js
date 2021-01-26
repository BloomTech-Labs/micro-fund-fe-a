import React from 'react';
import styled from 'styled-components';
import { LoginPage } from '../components/pages/Login';
import { Route, Link } from 'react-router-dom';
import logo from '../images/microLogo.png';

const styledDiv = styled.div`
  display: flex;
  color: #2fa689;
  border-color: whitesmoke;
  height: 10vh;
`;

const Header = () => {
  return (
    <styledDiv classname="head">
      <img
        className="piggy"
        src="https://image.freepik.com/free-vector/piggy-bank_53876-25494.jpg"
        alt="pink piggybank with coin"
      />
      {/* https://files.slack.com/files-pri/TSZCHB482-F01KVGZNH2M/piggybank.png */}
      <Link to="/login">
        <div>Login</div>
      </Link>
      {/* <Link to= '/'>
                <div>Home</div>
            </Link> */}
    </styledDiv>
  );
};

export default Header;
