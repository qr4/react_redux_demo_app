// @flow
import React from 'react';

import { HeaderComponent } from './components/HeaderComponent';
import { ListComponent } from './components/ListComponent';
import { SumComponent } from './components/SumComponent';
import { RequestJokeComponent } from './components/RequestJokeComponent';

export class App extends React.Component {

    render() {
        return (
            <div>
                <HeaderComponent />
                <ListComponent />
                <SumComponent />
                <RequestJokeComponent />
            </div>
        );
    }
}

