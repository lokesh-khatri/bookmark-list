import React from 'react';
import { connect } from 'react-redux';
import BookmarkForm from '../components/BookmarkForm';
import { addBookmark } from "../actions";

const AddBookmark = ({ dispatch }) => {
   const onSubmit = url => {
     dispatch(addBookmark(url));
   };

   return(
     <BookmarkForm
        onSubmit={onSubmit}
        buttonText={'Add'}
        inputText={''}
        placeholderText={'Enter url...'}
     />
   );
};

export default connect()(AddBookmark);



