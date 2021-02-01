import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../../styles/headers';
import Organization from './Organization';

const RenderPartnerAdminsPage = props => {
  return (
    <div>
      <div id="painful">
        <Header />
      </div>
      {props.data.map(item => (
        /*Styles and structure imported from Organization component */
        <Organization
          id={item.id}
          name={item.name}
          phone={item.phone}
          address={item.address}
          alt={item.title}
          src={item.thumbnailUrl}
        />
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
