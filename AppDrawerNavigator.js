import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSidebarMenu  from './CustomSidebarMenu';

export const AppDrawerNavigator = createDrawerNavigator({
    CloseMenu : {
    screen : AppTabNavigator
    },
  },
  {
    contentComponent:CustomSidebarMenu
  },
  {
    initialRouteName : 'Close Menu'
  })