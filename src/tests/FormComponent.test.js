import React from 'react';
import { shallow } from 'enzyme';
import FormComponent from '../FormComponent';


describe('Form Component', () => {

    it('should render without throwing an error', () => {
      expect(shallow(<FormComponent />).find('div.form-component').exists()).toBe(true)
    })

    it('renders a email input', () => {
        expect(shallow(<FormComponent />).find('#email').length).toEqual(1)
    })

    it('renders a password input', () => {
        expect(shallow(<FormComponent />).find('#password').length).toEqual(1)
    })

    it('renders the third input', () => {
        expect(shallow(<FormComponent />).find('#another-input-field').length).toEqual(1)
    })

    it('renders the fourth input', () => {
        expect(shallow(<FormComponent />).find('#last-input-field').length).toEqual(1)
    })

})

describe('Email input', () => {
  
    it('should respond to change event and change the state of FormComponent', () => {
     
     const wrapper = shallow(<FormComponent />);
     wrapper.find('#email').simulate('change', {target: {name: 'email', value: 'blah@gmail.com'}});
     
    expect(wrapper.state('email')).toEqual('blah@gmail.com');
    })
})
   
  describe('Password input', () => {
    
    it('should respond to change event and change the state of FormComponent', () => {
     
     const wrapper = shallow(<FormComponent />);
     wrapper.find('#password').simulate('change', {target: {name: 'password', value: 'cats'}});
     
     expect(wrapper.state('password')).toEqual('cats');
    })

    describe('anotherInputField input', () => {
  
        it('should respond to change event and change the state of FormComponent', () => {
         
         const wrapper = shallow(<FormComponent />);
         wrapper.find('#another-input-field').simulate('change', {target: {name: 'anotherInputField', value: 'my third value'}});
         
        expect(wrapper.state('anotherInputField')).toEqual('my third value');
        })
    })

    describe('lastInputField input', () => {
  
        it('should respond to change event and change the state of FormComponent', () => {
         
         const wrapper = shallow(<FormComponent />);
         wrapper.find('#last-input-field').simulate('change', {target: {name: 'lastInputField', value: 'my fourth value'}});
         
        expect(wrapper.state('lastInputField')).toEqual('my fourth value');
        })
    })
})
