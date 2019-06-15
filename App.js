import React, { Component } from 'react';
import {
  createAppContainer,
  createSwitchNavigator, 
  createBottomTabNavigator
} from 'react-navigation';

import {
  Login,
  LandingOne,
  LandingTwo,
  LandingThree,

} from './components'

const routesApp = createBottomTabNavigator({
  Tienda: LandingOne,
  Platos: LandingTwo,
  Info: LandingThree,
  
})


const AppNavigator = createSwitchNavigator({
  Login: Login,
  App: routesApp,
  
});

const AppContainer = createAppContainer(AppNavigator);

export default class FlexDimensionsBasics extends Component {
  render() {
    return (
      <AppContainer />
    )
  }
}
