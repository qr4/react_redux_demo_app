import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { DisconnectedListComponent } from '../../components/ListComponent';
import { Jokes } from "../../business/Jokes";

describe('ListComponent', () => {

    function renderComponentSanely(
        joke = new Jokes(),
        deleteJoke = jest.fn()
    ) {
        return <DisconnectedListComponent jokes={joke} deleteJoke={deleteJoke}/>;
    }

    it('[snapshot] it renders correctly', () => {
        const app = shallow(renderComponentSanely());
        expect(toJson(app)).toMatchSnapshot();
    });

    it('renders a list group item per joke', () => {
        const jokes = new Jokes().addNewJoke('this is a totally awesome joke!');
        const app = shallow(renderComponentSanely(jokes));

        const element = app.find('.list-group-item-test-0');
        expect(element.contains('this is a totally awesome joke!')).toBe(true);
    });

    it('calls remove handler with correct index', () => {
        const jokes = new Jokes().addNewJoke('this is a totally awesome joke!')
                                 .addNewJoke('this is a so-so joke');
        const spy = jest.fn();
        const app = shallow(renderComponentSanely(jokes, spy));

        const button = app.find('.list-group-item-test-1').find('Button');

        button.simulate('click', { button: 0 });

        expect(spy).toHaveBeenCalledWith(1);

    });

});
