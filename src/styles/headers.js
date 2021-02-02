import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Nav from '../components/pages/Landing/Nav';

// const StyledDiv = styled.div`
//   border-bottom: 3px solid #2fa689;
//   display: flex;
//   justify-content: flex-end;
//   .log {
//     display: flex;
//     padding-top: 7rem;
//     margin-right: 1rem;
//   }
//   .img {
//     display: flex;
//     height: 15px;
//     width: 15px;
//   }
//   .piggy {
//     width: 9.5rem;
//     height: 9.5rem;
//     margin-right: 70vw;
//   }
// `;
/*Header to be inserted into necessary components*/
const Header = () => {
  return <Nav />;
};

export default Header;
