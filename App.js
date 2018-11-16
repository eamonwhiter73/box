import React from 'react';
import {createStackNavigator} from 'react-navigation';

import Medications from './pages/Medications';
import ShortcutsNavigator from './navigators/ShortcutsNavigator';

const App = createStackNavigator({
  Medications: {
    screen: Medications,
    navigationOptions: ({ navigation }) => ({
      title: 'Medications'
    })
  },
  Shortcuts: {screen: ShortcutsNavigator}
});

export default App;
