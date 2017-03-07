// @flow
import React from 'react';
import { PageHeader } from 'react-bootstrap';

import { ListComponent } from './components/ListComponent';
import { SumComponent } from './components/SumComponent';
import { RequestJokeComponent } from './components/RequestJokeComponent';

export class App extends React.Component {

    render() {
        return (
            <div>
                <PageHeader>React + Redux Demo</PageHeader>
                <ListComponent />
                <SumComponent />
                <RequestJokeComponent />
            </div>
        );
    }
}

