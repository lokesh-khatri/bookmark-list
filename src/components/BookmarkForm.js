import React from 'react';
import PropTypes from 'prop-types';

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
    <div>
      <form onSubmit={handleOnSubmit}>
        <input
          value={inputText}
          placeholder={placeholderText}
          ref={node => input = node} />
        <button type="submit">
          buttonText
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
