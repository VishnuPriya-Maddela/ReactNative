import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {View,Text} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {LOGIN, REGISTER} from '../constants/routeNames'
import {Login} from '../screens/Login/index'
import {SignUp} from '../screens/Register/index'

const Stack = createNativeStackNavigator();

export const AuthNav = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name = {LOGIN} component={Login} />
            <Stack.Screen name={REGISTER} component={SignUp} />
        </Stack.Navigator>
    )
}
