import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  button: {
    background: 'linear-gradient(45deg, #345ff2 30%, #6f8ff6 90%)',
    borderRadius: '3px',
    border: 0,
    color: 'white',
    height: '32px',
    textTransform: 'uppercase',
    padding: '0 25px',
    boxShadow: '0 3px 5px 2px rgba(52, 95, 242, .30)',
  },
  textField: {
    width: '80%',
    margin: 5,
    height: 30,
    fontSize: 12,
    border: 0,
    outline: 0,
    background: 'transparent',
    borderBottom: '1px solid black'
  },
  form: {
    marginBottom: 60,
    marginTop: 10,
    marginRight:10,
    marginLeft: 10,
    position: 'relative'
  }

});

const BookmarkForm = ({ onSubmit, buttonText, inputText, placeholderText } ) => {
  let input;

  const handleOnSubmit = e => {
    e.preventDefault();
    if (!input.value.trim()) {
      return
    }
    onSubmit(input.value);
    input.value = ''
  };

  return (
    <div className={css(styles.form)}>
      <form onSubmit={handleOnSubmit}>
        <input
          defaultValue={inputText}
          placeholder={placeholderText}
          ref={node => input = node}
          className={css(styles.textField)}
        />
        <button className={css(styles.button)} type="submit">
          {buttonText}
        </button>
      </form>
    </div>
  );
};


BookmarkForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  inputText: PropTypes.string.isRequired,
  placeholderText: PropTypes.string.isRequired
};

export default BookmarkForm;
