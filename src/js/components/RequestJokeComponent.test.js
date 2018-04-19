// @flow

import React from 'react';
import { shallow } from 'enzyme';

import { DisconnectedRequestJokeComponent } from './RequestJokeComponent';

describe('RequestJokeComponent', () => {
    it('[snapshot] it renders correctly', () => {
        const app = shallow(<DisconnectedRequestJokeComponent requestJoke={() => {}} />);
        expect(app).toMatchSnapshot();
    });

    it('calls handler with correct value', () => {
        const spy = jest.fn();
        const preventDefaultSpy = jest.fn();
        const form = shallow(<DisconnectedRequestJokeComponent requestJoke={spy} />);

        const formControl = form.find('FormControl');

        // simulate the input change
        formControl.simulate('change', { target: { value: '123' } });

        form.simulate('submit', { preventDefault: preventDefaultSpy });

        expect(preventDefaultSpy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledWith(123);
    });

    it('does not call handler if input was non-numeric', () => {
        const spy = jest.fn();
        const form = shallow(<DisconnectedRequestJokeComponent requestJoke={spy} />);

        const formControl = form.find('FormControl');

        // simulate the input change
        formControl.simulate('change', { target: { value: 'NOT_A_NUMBER' } });

        form.simulate('submit', { preventDefault: () => {} });

        expect(spy).not.toHaveBeenCalled();
    });
});
