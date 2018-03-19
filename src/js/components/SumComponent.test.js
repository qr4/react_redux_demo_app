// @flow

import React from 'react';
import { shallow } from 'enzyme';

import { DisconnectedSumComponent } from './SumComponent';
import { Jokes } from '../business/Jokes';

describe('SumComponent', () => {
    it('[snapshot] it renders correctly', () => {
        const app = shallow(<DisconnectedSumComponent jokes={new Jokes()} />);
        expect(app).toMatchSnapshot();
    });

    it('computes the sum of characters correctly', () => {
        const jokes = new Jokes().addNewJoke('a').addNewJoke('123');
        const app = shallow(<DisconnectedSumComponent jokes={jokes} />);

        const elem = app.find('.test-class-sum');
        expect(elem.contains('Sum of all characters: 4')).toBe(true);
    });
});
