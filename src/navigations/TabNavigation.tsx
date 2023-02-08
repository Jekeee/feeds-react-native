/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Feed from '../pages/Feed';
import Profile from '../pages/Profile';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialTopTabNavigator();

function TabNavigation({}) {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarItemStyle: {
          flexDirection: 'row',
        },
        tabBarIcon: ({color}) => {
          let iconName = '';
          if (route.name === 'Feeds') {
            iconName = 'home';
          } else if (route.name === 'Profile') {
            iconName = 'account';
          }
          return (
            <MaterialCommunityIcon name={iconName} color={color} size={20} />
          );
        },
        tabBarActiveTintColor: '#0081B4',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Feeds" component={Feed} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default TabNavigation;
