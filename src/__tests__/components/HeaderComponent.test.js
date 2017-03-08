import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { HeaderComponent } from '../../components/HeaderComponent';

describe('HeaderComponent', () => {
    it('[snapshot] it renders correctly', () => {
        const app = shallow(<HeaderComponent />);
        expect(toJson(app)).toMatchSnapshot();
    });

});
