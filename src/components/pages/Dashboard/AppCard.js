import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Form from '../../common/Form';
import UserDescription from '../../common/UserDescription';
import logo from '../../../images/microLogo.png';
import Header from '../../../styles/headers';

const AppCardStyle = styled.div`
  box-shadow: 2px 2px 2px grey;
  margin: 10px;
  padding: 10px;
  background: #d5f2bb;
  box-sizing: boarder-box;
  height: 100%;
`;

function AppCard() {
  return (
    <div>
      <Header></Header>
      <AppCardStyle>
        <img src={logo} alt="Micro Fund" />
        <h1>Application Form</h1>
        <Link to="/">
          <div>Home</div>
        </Link>
        <UserDescription />

        <Form />
      </AppCardStyle>
    </div>
  );
}

export default AppCard;
