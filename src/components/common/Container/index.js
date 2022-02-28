import React from 'react'
import { View,Text, ScrollView } from 'react-native'
import style from "./style"
export const Container = ({children}) => {
    return (
        <>
        <ScrollView>
            <View style = {style.wrapper}>
            {children}
            </View>
        </ScrollView>
            
        </>
    )
}
