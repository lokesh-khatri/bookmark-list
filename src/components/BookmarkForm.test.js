import 'jsdom-global/register';
import React from 'react';
import Enzyme, { shallow }from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BookmarkForm from './BookmarkForm';

Enzyme.configure({ adapter: new Adapter() });

describe('BookmarkForm', () => {
  it('should render form with input type text and submit button', () => {
    const bookmarkForm = shallow(
      <BookmarkForm
        onSubmit={() => {}}
        buttonText={''}
        inputText={' '}
        placeholderText={''}
      />);

    expect(bookmarkForm.find('form')).toHaveLength(1);
    expect(bookmarkForm.find('input')).toHaveLength(1);
    expect(bookmarkForm.find('button')).toHaveLength(1);
  });
});