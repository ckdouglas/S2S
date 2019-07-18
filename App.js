import React, {Component} from 'react';
import Application from './src/index'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {reducer} from './src/Redux';

const store = createStore(reducer) 

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Application/>
      </Provider>
    );
  }
}
