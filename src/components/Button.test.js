import React from 'react';
import Enzyme, { shallow }from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from './Button';

Enzyme.configure({ adapter: new Adapter() });



describe('Button', () => {
  it('should create button with given text', () => {
    const acceptButton = shallow(<Button onClick = {() => {}} text = {'Accept!'} />);
    expect(acceptButton.text()).toEqual('Accept!');
  });

  it('should call onClick function when clicked', () => {
    const onClick = jest.fn();
    const acceptButton = shallow(<Button onClick = {onClick} text={' '} />);
    acceptButton.find('button').simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});