import React from 'react';
import PropTypes from 'prop-types'
import Button from './Button';
import TextField from './TextField';
import BookmarkForm from './BookmarkForm'

const Bookmark = ({ onEdit, onUpdate, onRemove, editing, url }) =>{
  if(editing) {
    return (
      <li>
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
      <li>
        <div>
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