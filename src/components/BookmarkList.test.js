import React from 'react';
import Enzyme, { shallow }from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BookmarkList from './BookmarkList';
import Bookmark from './Bookmark';

Enzyme.configure({ adapter: new Adapter() });


describe('BookmarkList', () => {
  it('should render an unordered list', () => {
    const bookmarkList = shallow(
      <BookmarkList
        bookmarks={[]}
        onEdit={() => {}}
        onUpdate={() => {}}
        onRemove={() => {}}
      />
    );

    expect(bookmarkList.find('ul')).toHaveLength(1);
  });

  it('should create Bookmark components with correct values ', () => {
    const bookmarks = [
      {
        url: 'www.helloworld.com',
        editing: true
      },
      {
        url: 'www.wired.com',
        editing: false
      }

    ];

    const onEdit = jest.fn();
    const onUpdate = jest.fn();
    const onRemove = jest.fn();

    const bookmarkList = shallow(
      <BookmarkList
        bookmarks={bookmarks}
        onEdit={onEdit}
        onUpdate={onUpdate}
        onRemove={onRemove}
      />
    );

    expect(bookmarkList.find('Bookmark')).toHaveLength(2);
  });
});