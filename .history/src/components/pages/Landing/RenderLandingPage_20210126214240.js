import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import styled from 'styled-components';
import Footer from '../../common/Footer';


function RenderLandingPage() {
  return (
    <div>
       <Nav />
      <Title>MicroFund</Title>
      <p>Helping microentrepreneurs around the world to start their businesses.</p>
      <div>
        <p>
          What is MicroFund?
        </p>
        <p>
          <Link to="/example-list">Example List of Items</Link>
        </p>
      </div>
    </div>

  );
}
export default RenderLandingPage;
