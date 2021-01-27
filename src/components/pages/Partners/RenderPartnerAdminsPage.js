import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import logo from '../../../images/microLogo.png';
import styled from 'styled-components';
import Header from '../../../styles/headers';
import { useState } from 'react';

const PartnerStyle = styled.div`
  display: flex;
  padding-left: 10%;
  width: 90%;
  margin-left: 5%;
  padding-top: 2%;
  flex-wrap: flex-wrap;
  :hover {
    border: 2px solid #2fa689;
  }
  .hide {
    display: none;
  }
  button {
    display: flex;
    font-size: 0.5rem;
    height: 4rem;
    width: 5rem;
    margin-left: 2rem;
    background-color: white;
    justify-content: center;
  }
  .butto {
    margin-bottom: 3rem;
    padding-right: 1rem;
  }
  figure {
    display: inline-flex;
    height: 10rem;
    width: 20%;
  }
  img {
    width: 9.5rem;
    height: 9.5rem;
  }
  h2 {
    color: #2fa689;
    width: 20rem;
    height: 30%;
    margin-left: 25%;
  }
  h3 {
    margin-left: 25%;
    color: #2fa689;
    width: 30rem;
  }
`;

const RenderPartnerAdminsPage = props => {
  const [isActive, setActive] = useState('false');

  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <div>
      <div id="painful">
        <Header />
      </div>
      {props.data.map(item => (
        <PartnerStyle>
          <figure key={item.id}>
            <img className="corp" src={item.thumbnailUrl} alt={item.title} />
            <h2>{item.name}</h2>
            <button onClick={handleToggle}>
              <h2 className="butto">click for details</h2>
            </button>
            <figcaption>
              <h3 className={isActive ? 'hide' : null}>{item.phone}</h3>
              <h3 className={isActive ? 'hide' : null}>{item.address}</h3>
            </figcaption>
          </figure>
        </PartnerStyle>
      ))}
    </div>
  );
};
export default RenderPartnerAdminsPage;

RenderPartnerAdminsPage.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      title: PropTypes.string,
      url: PropTypes.string,
      thumbnailUrl: PropTypes.string,
    })
  ).isRequired,
};
