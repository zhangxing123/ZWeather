/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import App from './js/App';
import configureStore from './js/redux/CreatStore';
const store = configureStore();
export default class ZWeather extends Component {
  render() {
    return (
        <Provider store={store}>
          <App />
        </Provider>
    );
  }
}



AppRegistry.registerComponent('ZWeather', () => ZWeather);
