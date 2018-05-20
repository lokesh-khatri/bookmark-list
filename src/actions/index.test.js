import {ADD_BOOKMARK, DELETE_BOOKMARK, UPDATE_BOOKMARK, EDITING_BOOKMARK} from "./actionTypes";
import {addBookmark, deleteBookmark, updateBookmark, editingBookmark} from "./index";

describe('actions', () => {
  it('should create an action to add bookmark', () => {
    const url = 'www.helloworld.com';
    const expectedAction = {
      type: ADD_BOOKMARK,
      url
    };

    expect(addBookmark(url)).toEqual(expectedAction);
  });

  it('should  create an action to update bookmark', () => {
    const url = 'www.helloworld1.com';
    const index = 2;
    const expectedAction = {
      type: UPDATE_BOOKMARK,
      url,
      index
    };

    expect(updateBookmark(url, index)).toEqual(expectedAction);
  });

  it('should create an action to delete bookmark', () => {
    const index= 2;
    const expectedAction = {
      type: DELETE_BOOKMARK,
      index
    };

    expect(deleteBookmark(index)).toEqual(expectedAction);
  });

  it('should create an action to denote state of bookmark being edited', () => {
    const index= 2;
    const expectedAction = {
      type: EDITING_BOOKMARK,
      index
    };

    expect(editingBookmark(index)).toEqual(expectedAction);
  });
});