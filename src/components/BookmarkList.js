import React from 'react';
import PropTypes from 'prop-types'
import Bookmark from './Bookmark'

const BookmarkList = ({bookmarks, onEdit, onUpdate, onRemove }) => (
  <ul>
    {
      bookmarks.map((bookmark, index) => (
        <Bookmark
          key={index}
          onEdit={() => onEdit(index)}
          onUpdate={bookmarkText => onUpdate(bookmarkText, index)}
          onRemove={() => onRemove(index)}
          editing={bookmark.editing}
          url={bookmark.url}
        />
      ))
    }
  </ul>
);

BookmarkList.propTypes = {
  bookmarks: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      editing: PropTypes.bool.isRequired
    }).isRequired
  ).isRequired,
  onEdit: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
};

export default BookmarkList