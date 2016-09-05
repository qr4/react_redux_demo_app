import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import {PageHeader} from 'react-bootstrap';
import {store} from './StoreProvider.js';

import {ListComponent} from './ListComponent.jsx';
import {SumComponent} from './SumComponent.jsx';
import {FormComponent} from './FormComponent.jsx';

class Main extends React.Component{

  render() {
    return (
      <Provider store={store}>
        <div>
          <PageHeader>
            React + Redux Demo
          </PageHeader>
          <ListComponent/>
          <SumComponent />
          <FormComponent />
        </div>
      </Provider>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('main'));
