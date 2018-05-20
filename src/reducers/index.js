import { bookmarks } from './bookmarks';

export const bookmarkApp =  (state = {}, action) => {
  return {
    bookmarks: bookmarks(state.bookmarks, action)
  }
};