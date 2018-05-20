import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { isValidUrl } from "../utils/isValidUrl";

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
  },
  span: {
    color: 'red',
    fontSize: 12,
    marginLeft: 5
  }

});

class BookmarkForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.inputText,
      editing: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({value: this.props.inputText});
    this.input.focus();
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
      editing: true
    });
  }

  isInputValid() {
    return this.state.value.trim() && isValidUrl(this.state.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    if(this.isInputValid()) {
      this.setState({
        value: '',
        editing: false
      });
      this.props.onSubmit(this.state.value);
    }
  }

  render() {
    const spanValue = !this.isInputValid() && this.state.editing
      ? 'Invalid url!'
      : '';

    return (
      <div className={css(styles.form)}>
        <form onSubmit={this.handleSubmit}>
            <input
              value={this.state.value}
              placeholder={this.props.placeholderText}
              className={css(styles.textField)}
              onChange={this.handleChange}
              ref={input => this.input = input}
            />
          <button className={css(styles.button)} type="submit">
            {this.props.buttonText}
          </button>
        </form>
        <span className={css(styles.span)}>{spanValue}</span>
      </div>
    );
  }
}

BookmarkForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  inputText: PropTypes.string.isRequired,
  placeholderText: PropTypes.string.isRequired
};

export default BookmarkForm;
