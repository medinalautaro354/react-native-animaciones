import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import PanGesture from '../screens/PanGesture';

type ParamListProps = {
  Home: undefined;
  PanGesture: undefined;
};
const Stack = createNativeStackNavigator<ParamListProps>();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="PanGesture" component={PanGesture} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
