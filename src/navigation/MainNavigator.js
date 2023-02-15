import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import AddPlaceScreen from '../screens/addPlaceScreen/AddPlaceScreen';
import ProfileScreen from '../screens/profileScreen/ProfileScreen';
import HomeNavigator from './HomeNavigator';
import {PlaceContext} from '../contexts/PlaceContext';
import {COLORS} from '../constants/colors';
import {UserPlacesContext} from '../contexts/UserPlacesContext';

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <UserPlacesContext>
      <PlaceContext>
        <Tab.Navigator
          initialRouteName={'Home'}
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: COLORS.LIGHT_GREEN,
            tabBarInactiveTintColor: COLORS.GREY,
            tabBarLabelStyle: {paddingBottom: 5, fontSize: 10},
          }}>
          <Tab.Screen
            name={'Profile'}
            component={ProfileScreen}
            options={{
              tabBarIcon: ({color, size}) => (
                <Icon name="user" size={size} color={color} />
              ),
              tabBarLabel: 'Profile',
            }}
          />
          <Tab.Screen
            name={'Home'}
            component={HomeNavigator}
            options={{
              tabBarIcon: ({color, size}) => (
                <Icon name="home" size={size} color={color} />
              ),
              tabBarLabel: 'Home',
            }}
          />
          <Tab.Screen
            name={'AddPlace'}
            component={AddPlaceScreen}
            options={{
              tabBarIcon: ({color, size}) => (
                <Icon name="plus" size={size} color={color} />
              ),
              tabBarLabel: 'Add a place',
            }}
          />
        </Tab.Navigator>
      </PlaceContext>
    </UserPlacesContext>
  );
};

export default MainNavigator;
