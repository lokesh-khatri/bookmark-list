import 'jsdom-global/register';
import React from 'react';
import Enzyme, { shallow }from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TextField from './TextField';

Enzyme.configure({ adapter: new Adapter() });


describe('TextField', () => {
  it('should render with bookmark url', () => {
    const textField = shallow(<TextField onClick = {() => {}} url = {'hello world!'} />)
    expect(textField.text()).toEqual('hello world!');
  });

  it('should call onClick function when clicked', () => {
    const onClick = jest.fn();
    const textField = shallow(<TextField onClick = {onClick} url = {' '} />)
    textField.find('div').simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });

});