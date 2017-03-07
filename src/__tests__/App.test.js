import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { App } from '../App';

describe('App', () => {
    it('[snapshot] it renders correctly', () => {
        const app = shallow(<App />);
        expect(toJson(app)).toMatchSnapshot();
    });
});
