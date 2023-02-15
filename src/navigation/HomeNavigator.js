import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {platform} from '../serivces/generic/platform';
import MapScreen from '../screens/mapScreen/MapScreen';
import HomeScreen from '../screens/homeScreen/HomeScreen';
import {COLORS} from '../constants/colors';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        options={{headerShown: false}}
        name="Main"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{
          headerShown: platform.isIos(),
          headerTransparent: true,
          title: '',
          headerTintColor: COLORS.BLACK,
        }}
        name="Map"
        component={MapScreen}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
