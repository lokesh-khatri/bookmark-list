import {ADD_BOOKMARK, DELETE_BOOKMARK, UPDATE_BOOKMARK, EDITING_BOOKMARK} from "../actions/actionTypes";

const initialState = [];

export const bookmarks = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOKMARK:
      return state.concat({
        url: action.url,
        onEdit: false
      });


    case UPDATE_BOOKMARK:
      return state.map((bookmark, index) => {
        return index === action.index
          ? {url: action.url, onEdit: !bookmark.onEdit}
          : bookmark;
      });

    case EDITING_BOOKMARK:
      return state.map((bookmark, index) => {
        return index === action.index
          ? {url: bookmark.url, onEdit: !bookmark.onEdit}
          : bookmark;
      });

    case DELETE_BOOKMARK:
      return state.filter((bookmark, index) => index !== action.index);

    default:
      return state;
  }
};