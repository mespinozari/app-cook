import React, { Component } from 'react';
import {
  createAppContainer,
  createSwitchNavigator, 
  createBottomTabNavigator
} from 'react-navigation';

import {
  Login,
  LandingOne,
  LandingTwo
} from './components'

const routesApp = createBottomTabNavigator({
  Market: LandingOne,
  Dishes: LandingTwo
})


const AppNavigator = createSwitchNavigator({
  Login: Login,
  App: routesApp
});

const AppContainer = createAppContainer(AppNavigator);

export default class FlexDimensionsBasics extends Component {
  render() {
    return (
      <AppContainer />
    )
  }
}
