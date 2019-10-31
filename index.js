/**
 * @format
 */

import React from 'react';
import 'react-native-gesture-handler';

import {name as appName} from './app';
import Routes from './src/Routes';
import {AppRegistry} from 'react-native';

AppRegistry.registerComponent(appName, () => Routes);
