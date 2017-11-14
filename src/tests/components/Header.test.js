import Header from '../../components/Header';
import { shallow } from 'enzyme';
import React from 'react';

test('should render header correctly', () => {
    const wrapper = shallow(<Header/>);
    expect(wrapper).toMatchSnapshot();

    // Enzyme
    // expect(wrapper.find('h1').text()).toBe('Expensify');

    // React Test Renderer
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header/>);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();

});

