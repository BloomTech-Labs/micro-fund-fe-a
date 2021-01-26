import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../../images/microLogo.png';
import styled from 'styled-components';

const PartnerStyle = styled.div`
  border: 3px solid #2fa689;
  color: #2fa689;
  display: flex;
  padding-left: 10%;
  width: 90%;
  margin-left: 5%;
  padding-top: 2%;
  figure {
    display: inline-flex;
    height: 10rem;
    width: 20%;
  }
  img {
    width: 100%;
    height: 100%;
  }
  h2 {
    color: #2fa689;
    width: 90%;
    height: 30%;
    margin-left: 25%;
  }
  h3 {
    margin-left: 45%;
    color: #2fa689;
    width: 10rem;
  }
`;

const RenderPartnerAdminsPage = props => (
  <div>
    <img src={logo} alt="Micro Fund" />
    {props.data.map(item => (
      <PartnerStyle>
        <figure key={item.id}>
          <img src={item.thumbnailUrl} alt={item.title} />
          <h2>{item.name} name</h2>
          <h2>Organization</h2>
          <figcaption>
            <h3>{item.title}</h3>
          </figcaption>
        </figure>
      </PartnerStyle>
    ))}
  </div>
);

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
