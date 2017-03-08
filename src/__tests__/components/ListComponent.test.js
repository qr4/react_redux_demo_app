import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { DisconnectedListComponent } from '../../components/ListComponent';
import { Jokes } from "../../business/Jokes";

describe('ListComponent', () => {
    it('[snapshot] it renders correctly', () => {
        const app = shallow(<DisconnectedListComponent jokes={new Jokes()} deleteJoke={() => {}}/>);
        expect(toJson(app)).toMatchSnapshot();
    });

    it('renders a list group item per joke', () => {
        const jokes = new Jokes().addNewJoke('this is a totally awesome joke!');
        const app = shallow(<DisconnectedListComponent jokes={jokes} deleteJoke={() => {}}/>);

        const element = app.find('.list-group-item-test-0');
        expect(element.contains('this is a totally awesome joke!')).toBe(true);
    });

});
