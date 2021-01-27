import React from 'react';
import styled from 'styled-components';
import { LoginPage } from '../components/pages/Login';
import { Route, Link } from 'react-router-dom';
import logo from '../images/microLogo.png';

const StyledDiv = styled.div`
  border-bottom: 3px solid #2fa689;
  display: flex;
  padding-left: 10%;
  margin-left: 5%;
  .log {
    display: flex;
    padding-top: 7rem;
    margin-right: 1rem;
  }
  .img {
    display: flex;
    height: 15px;
    width: 15px;
  }
  .piggy {
    width: 8.5rem;
    height: 8.5rem;
    margin-right: 30rem;
    padding-top: 2rem;
  }
`;

const Header = () => {
  return (
    <StyledDiv classname="head">
      <img
        className="piggy"
        src="https://image.freepik.com/free-vector/piggy-bank_53876-25494.jpg"
        alt="pink piggybank with coin"
      />
      {/* https://files.slack.com/files-pri/TSZCHB482-F01KVGZNH2M/piggybank.png */}
      <Link to="/">
        <div className="log">Home</div>
      </Link>
      <Link to="/login">
        <div className="log">Login</div>
      </Link>
    </StyledDiv>
  );
};

export default Header;
