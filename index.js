/**
 * @format
 */

import {AppRegistry, AppState} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

// componentWillUnmount() {
//     AppState.removeEventListener('change', this.handleAppStateChange);
//   };

AppRegistry.registerComponent(appName, () => App);