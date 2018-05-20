import React from 'react';
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  textField: {
    width: '80%',
    cursor: 'pointer'
  },
  hover: {
    ':hover': {
      color: '#345ff2'
    }
  },
});


const TextField = ({ onClick, url }) => (
  <div className={css(styles.textField, styles.hover)} onClick={onClick}>
    {url}
  </div>
);

TextField.propTypes = {
  onClick: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
};

export default TextField;
