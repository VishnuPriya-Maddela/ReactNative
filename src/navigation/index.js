import React, {useContext} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {SafeAreaView,StatusBar,Text} from 'react-native';
import {AuthNav} from "./AuthNav"
import {DrawerNav} from "./DrawerNav"
import { GlobalContext } from '../context/Provider';

export default AppNav = () => {
    const state= useContext(GlobalContext)
    console.log("state is", state)
    const {authState:{isLoggedIn}} = useContext(GlobalContext)
    return (
        <NavigationContainer>
            {isLoggedIn ? <DrawerNav/> : <AuthNav/>}
        </NavigationContainer>
    );
};
