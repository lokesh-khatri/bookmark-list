import {ADD_BOOKMARK, DELETE_BOOKMARK, UPDATE_BOOKMARK, EDITING_BOOKMARK} from "./actionTypes";

export const addBookmark = url => {
  return {
    type: ADD_BOOKMARK,
    url
  }
};

export const updateBookmark = (url, index) => {
  return {
    type: UPDATE_BOOKMARK,
    url,
    index
  }
};

export const editingBookmark = index => {
  return {
    type: EDITING_BOOKMARK,
    index
  }
};

export const deleteBookmark = index => {
  return {
    type: DELETE_BOOKMARK,
    index
  }
};