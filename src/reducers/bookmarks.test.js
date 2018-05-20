import { bookmarks } from "./bookmarks";
import {addBookmark, deleteBookmark, updateBookmark, editingBookmark} from "../actions";

describe('bookmarks reducer', () => {
  it('should return initial state', () => {
    expect(bookmarks(undefined, { })).toEqual([ ]);
  });

  it('should handle adding new bookmark', () => {
    const url = 'https://wired.com';
    expect(bookmarks([], addBookmark(url))).toEqual(
      [
        {
          url,
          editing: false
        }
      ]
    );
  });

  it('should handle updating existing bookmark', () => {
    const url = 'https://wired.com';
    const currentState = [
      {
        url,
        editing: true
      }
    ];
    const newUrl = 'https://helloworld.com';
    const index = 0;

    expect(bookmarks(currentState, updateBookmark(newUrl, index))).toEqual(
      [
        {
          url: newUrl,
          editing: false
        }
      ]
    );
  });

  it('should handle editing existing bookmark', () => {
    const url = 'https://wired.com';
    const currentState = [
      {
        url,
        editing: false
      }
    ];
    const index = 0;

    expect(bookmarks(currentState, editingBookmark(index))).toEqual(
      [
        {
          url,
          editing: true
        }
      ]
    );
  });

  it('should handle deleting existing bookmark', () => {
    const currentState = [
      {
        url: 'https://wired.com',
        editing: false
      },
      {
        url: 'https://helloworld.com',
        editing: false
      }
    ];
    const index = 1;

    expect(bookmarks(currentState, deleteBookmark(index))).toEqual(
      [
        {
          url: 'https://wired.com',
          editing: false
        }
      ]
    );
  });
});