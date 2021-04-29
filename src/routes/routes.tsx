import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import colors from '../styles/colors';
import { Welcome } from '../pages/Welcome';
import { Login } from '../pages/Login';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: colors.white
      }
    }}>

    <stackRoutes.Screen name="Welcome" component={Welcome}></stackRoutes.Screen>
    <stackRoutes.Screen name="Login" component={Login}></stackRoutes.Screen>

  </stackRoutes.Navigator>
);

export default AppRoutes;