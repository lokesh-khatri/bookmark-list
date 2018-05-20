import React from 'react';
import PropTypes from 'prop-types'

const TextField = ({ onClick, url }) => (
  <div onClick={onClick}>
    {url}
  </div>
);

TextField.propTypes = {
  onClick: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
};

export default TextField;
