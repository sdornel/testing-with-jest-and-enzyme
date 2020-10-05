import React from 'react';
import { shallow } from 'enzyme';
import FormComponent from '../FormComponent';


describe('Form Component', () => {

    it('should render without throwing an error', () => {
      expect(shallow(<FormComponent />).find('div.form-component').exists()).toBe(true)
    })
})


