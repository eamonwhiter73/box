import React from 'react';
import { createStackNavigator } from 'react-navigation';

import ShortcutsHome from '../pages/ShortcutsHome';
import Tpd from '../pages/Tpd';
import SelectHours from '../pages/SelectHours';

const ShortcutsNavigator = createStackNavigator({
  ShortcutsHome: {
    screen: ShortcutsHome,
  },
  Tpd: {
    screen: Tpd,
    navigationOptions: {
      headerTransparent: true
    }
  },
  SelectHours: {
    screen: SelectHours,
    navigationOptions: {
      title: 'Select Time(s)',
      headerTransparent: true
    }
  }
},
{
  initialRouteName: 'ShortcutsHome',
});

export default ShortcutsNavigator;