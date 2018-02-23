// @flow

import React from 'react';
import { shallow } from 'enzyme';

import { DisconnectedListComponent } from './ListComponent';
import { Jokes } from '../business/Jokes';

describe('ListComponent', () => {
    const renderComponentSanely = (jokes = new Jokes(), deleteJoke = jest.fn()) => (
        <DisconnectedListComponent jokes={jokes} deleteJoke={deleteJoke} />
    );

    it('[snapshot] it renders correctly', () => {
        const app = shallow(renderComponentSanely());
        expect(app).toMatchSnapshot();
    });

    it('renders a list group item per joke', () => {
        const jokes = new Jokes().addNewJoke('this is a totally awesome joke!');
        const app = shallow(renderComponentSanely(jokes));

        const element = app.find('.list-group-item-test-0');
        expect(element.contains('this is a totally awesome joke!')).toBe(true);
    });

    it('calls remove handler with correct index', () => {
        const jokes = new Jokes().addNewJoke('this is a totally awesome joke!').addNewJoke('this is a so-so joke');
        const spy = jest.fn();
        const app = shallow(renderComponentSanely(jokes, spy));

        const button = app.find('.list-group-item-test-1').find('button');

        button.simulate('click', { button: 0 });

        expect(spy).toHaveBeenCalledWith(1);
    });
});
