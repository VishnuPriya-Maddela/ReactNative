import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {SafeAreaView,StatusBar,Text} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {HomeNav} from "./HomeNav"
import { HOME_NAVIGATOR } from '../constants/routeNames';

const Drawer = createDrawerNavigator();
export const DrawerNav = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name={HOME_NAVIGATOR} component={HomeNav} />
        </Drawer.Navigator>
    )
}
