import React, {useState} from 'react'
import {Text,View, TextInput, TouchableOpacity, ActivityIndicator} from 'react-native';
import styles from './style'
import colors from "../../../assets/theme/colors";

export default button = ({
    title,disabled,onPress,loading, primary, secondary, danger})=>{
    const [focussed,setFocussed] = useState(false);
    const getFlexDirection=()=>{
        if(icon && iconPosition){
            if(iconPosition==="left"){
                return 'row'
            }else{
                return 'row-reverse'
            }
        }
    };
    const getBackgroundColor = ()=>{
        if(disabled){
            return colors.grey
        }
        if (primary){
            return colors.primary
        }
        if(secondary){
            return colors.secondary
        }
        if(danger){
            return colors.danger
        }
    };


    return (
        <TouchableOpacity 
        onPress={onPress}
        disabled={disabled}
        style = {[styles.wrapper,{backgroundColor:getBackgroundColor()}]}>
            <View style = {[styles.loader]}>
                {loading && <ActivityIndicator color = {primary?colors.secondary:colors.primary}/>}
                {title && <Text style = {{color:disabled?'black':'white', paddingLeft:loading?5:0}}>{title}</Text>}
            </View>
            
        </TouchableOpacity>
    )
}