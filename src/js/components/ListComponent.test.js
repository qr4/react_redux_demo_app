// @flow

import React from 'react';
import { shallow } from 'enzyme';

import { DisconnectedListComponent } from './ListComponent';
import { Jokes } from '../business/Jokes';

describe('ListComponent', () => {
    function renderComponentSanely(props = {}) {
        const defaultProps = {
            jokes: new Jokes(),
        };

        return <DisconnectedListComponent {...defaultProps} {...props} />;
    }

    it('[snapshot] it renders correctly', () => {
        const app = shallow(renderComponentSanely());
        expect(app).toMatchSnapshot();
    });

    it('renders a list group item per joke', () => {
        const jokes = new Jokes().addNewJoke('this is a totally awesome joke!');
        const app = shallow(renderComponentSanely({ jokes: jokes }));

        const element = app.find('.list-group-item-test-0');
        expect(element.contains('this is a totally awesome joke!')).toBe(true);
    });
});
