import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {Text,View} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {CONTACT_LIST, CONTACT_DETAIL, CREATE_CONTACT, SETTINGS} from '../constants/routeNames'
import {Contacts} from '../screens/Contacts/index'
import {CreateContact} from '../screens/Create_Contact/index'
import {ContactDetail} from '../screens/Contact_Detail/index'
import {Settings} from '../screens/Settings/index'

const Stack = createNativeStackNavigator();

export const HomeNav = () => {
    return (
        <Stack.Navigator initialRouteName = {CONTACT_LIST}>
            <Stack.Screen name={CONTACT_LIST} component={Contacts} />
            <Stack.Screen name={CREATE_CONTACT} component={CreateContact} />
            <Stack.Screen name={CONTACT_DETAIL} component={ContactDetail} />
            <Stack.Screen name={SETTINGS} component={Settings} />
        </Stack.Navigator>
    )
}
