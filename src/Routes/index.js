// src/index.js
import Home from '../screens/Home';
import About from '../screens/About';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

const TabNavigator = createBottomTabNavigator({
  Home,
  About,
});

const Routes = createAppContainer(TabNavigator);

export default Routes;
