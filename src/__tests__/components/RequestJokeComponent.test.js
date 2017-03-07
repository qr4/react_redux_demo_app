import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { DisconnectedRequestJokeComponent } from '../../components/RequestJokeComponent';

describe('RequestJokeComponent', () => {
    it('[snapshot] it renders correctly', () => {
        const app = shallow(<DisconnectedRequestJokeComponent requestJoke={() => {}}/>);
        expect(toJson(app)).toMatchSnapshot();
    });

    it('calls handler with correct value', () => {
        const spy = jest.fn();
        const rendered = shallow(<DisconnectedRequestJokeComponent requestJoke={spy}/>);

        const formControl = rendered.find('.form-control-test');

        // simulate the input change
        formControl.simulate('change', { target: {value: '123' } });

        const button = rendered.find('.test-submit-button');
        button.simulate('click');

        expect(spy).toHaveBeenCalledWith(123);

    });

    it('does not call handler if input was non-numeric', () => {
        const spy = jest.fn();
        const rendered = shallow(<DisconnectedRequestJokeComponent requestJoke={spy}/>);

        const formControl = rendered.find('.form-control-test');

        // simulate the input change
        formControl.simulate('change', { target: {value: 'NOT_A_NUMBER' } });

        const button = rendered.find('.test-submit-button');
        button.simulate('click');

        expect(spy).not.toHaveBeenCalled();

    });

});
