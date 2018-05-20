import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  button: {
    background: 'linear-gradient(45deg, #000 30%, #333333 90%)',
    borderRadius: '3px',
    border: 0,
    color: 'white',
    height: '32px',
    textTransform: 'uppercase',
    padding: '0 25px',
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .30)',
  }
});

const Button = ({ onClick, text } ) => (
  <button className={css(styles.button)} onClick={onClick}>
    { text }
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

export default Button;
