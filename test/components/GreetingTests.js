import React from 'react';
import {shallow} from 'enzyme';
import expect from 'expect';

import {Greeting} from './../../src/components/Greeting.js';

describe('<Greeting /> component', () => {

    it('should say hello correctly', () => {
        const enzymeWrapper = shallow(<Greeting />);
        expect(
            enzymeWrapper.find('div').text()
        ).toEqual('Hello World!');
    });
    
});