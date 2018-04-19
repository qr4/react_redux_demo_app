// @flow
import React from 'react';
import { Grid } from 'react-bootstrap';

import { HeaderComponent } from './components/HeaderComponent';
import { ListComponent } from './components/ListComponent';
import { SumComponent } from './components/SumComponent';
import { RequestJokeComponent } from './components/RequestJokeComponent';

export const App = () => (
    <Grid>
        <HeaderComponent />
        <ListComponent />
        <SumComponent />
        <RequestJokeComponent />
    </Grid>
);
