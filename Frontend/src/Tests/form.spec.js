import React from 'react';
import { shallow, mount, render } from 'enzyme';
import CallBackForm from '../App.js';
import enzymeConfig from '../enzymeConfig';

describe('<CallBackForm >', function() {


    it('Should capture fullName correctly onChange', function(){

        const wrapper = mount(<CallBackForm />);
        const input = wrapper.find('input').at(0).simulate('change', { target: { name: 'fullName', value: 'hello' } })
        console.log('hello ' + JSON.stringify(input))
        expect(wrapper.state().fullName).toEqual('hello');
        wrapper.unmount();
    })

   
})