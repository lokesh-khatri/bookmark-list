import React from 'react';
import Enzyme, { shallow }from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Bookmark from './Bookmark';
import TextField from './TextField';
import Button from './Button'
import BookmarkForm from './BookmarkForm';

Enzyme.configure({ adapter: new Adapter() });


describe('Bookmark Component', () => {
  it('should render bookmark form if on edit mode', () => {
    const url = 'Hello World!';
    const onUpdate = jest.fn();
    const bookmark = shallow(
      <Bookmark
        onEdit={() =>{}}
        onUpdate={onUpdate}
        onRemove={()=>{}}
        editing={true}
        url={url}
      />);

    expect(
      bookmark
        .containsMatchingElement(
          <BookmarkForm
            onSubmit={onUpdate}
            buttonText={'Update'}
            inputText={url}
            placeholderText={'Enter url...'}
          />))
      .toBeTruthy();

  });

  it('should text and remove button if not on edit mode', () => {
    const url = 'Hello World!';
    const onEdit = jest.fn();
    const onRemove = jest.fn();

    const bookmark = shallow(
      <Bookmark
        onEdit={onEdit}
        onUpdate={() => {}}
        onRemove={onRemove}
        editing={false}
        url={url}
      />);

    expect(
      bookmark
        .containsMatchingElement(
          <TextField onClick={onEdit} url={url}/>))
      .toBeTruthy();

    expect(
      bookmark
        .containsMatchingElement(
          <Button onClick={onRemove} text={'Remove'}/>))
      .toBeTruthy();

  });
});