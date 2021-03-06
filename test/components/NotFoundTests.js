import React from 'react';

import NotFound from './../../src/components/NotFound.js';

describe('<NotFound /> component', () => {

    it('should display 404 message correcly', () => {
        const enzymeWrapper = shallow(<NotFound />);
        expect(
            enzymeWrapper.find('span').text()
        ).toEqual('404 NOT FOUND');
    });
    
});