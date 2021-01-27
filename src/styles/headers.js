import React from 'react';
import styled from 'styled-components';
import { LoginPage } from '../components/pages/Login';
import { Route, Link } from 'react-router-dom';
import logo from '../images/microLogo.png';

const StyledDiv = styled.div`
  border-bottom: 3px solid #2fa689;
  display: flex;
  justify-content: flex-end;
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
    width: 9.5rem;
    height: 9.5rem;
    margin-right: 70vw;
  }
`;

const Header = () => {
  return (
    <StyledDiv classname="head">
      <img
        className="piggy"
        src="https://thumbs.dreamstime.com/b/piggy-bank-line-icon-vector-dollar-coin-moneybox-flat-sign-symbols-logo-illustration-isolated-white-background-174959785.jpg"
        alt="pink piggybank with coin"
      />
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
