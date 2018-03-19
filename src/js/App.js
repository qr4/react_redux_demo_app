// @flow
import React from 'react';

import { HeaderComponent } from './components/HeaderComponent';
import { ListComponent } from './components/ListComponent';
import { SumComponent } from './components/SumComponent';
import { RequestJokeComponent } from './components/RequestJokeComponent';

export const App = () => (
    <div className="container-fluid mt-3">
        <HeaderComponent />
        <ListComponent />
        <SumComponent />
        <RequestJokeComponent />
    </div>
);
