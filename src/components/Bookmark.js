import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import Button from './Button';
import TextField from './TextField';
import BookmarkForm from './BookmarkForm'


const styles = StyleSheet.create({
  listElement: {
    width: '100%',
    height: 40,
    marginLeft: 0,
    marginTop: 10
  },
  viewDiv: {
    width: '100%',
    height: '100%',
    display: 'inline-flex'
  }
});

const Bookmark = ({ onEdit, onUpdate, onRemove, editing, url }) =>{
  if(editing) {
    return (
      <li className={css(styles.listElement)}>
        <BookmarkForm
          onSubmit={onUpdate}
          buttonText={'Update'}
          inputText={url}
          placeholderText={'Enter url...'}
        />
      </li>
    );
  } else {
    return (
      <li className={css(styles.listElement)}>
        <div className={css(styles.viewDiv)}>
          <TextField onClick={onEdit} url={url}/>
          <Button onClick={onRemove} text={'Remove'}/>
        </div>
      </li>
    )
  }

};


Bookmark.propTypes = {
  onEdit: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  editing: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired
};

export default Bookmark;