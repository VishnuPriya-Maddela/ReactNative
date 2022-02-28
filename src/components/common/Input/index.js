import React, {useState} from 'react'
import {Text,View, TextInput} from 'react-native';
import styles from './style'
import colors from "../../../assets/theme/colors";

export default input = ({
    label,iconPosition,error,onChangeText,icon,value,...props})=>{
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
    const getBorderColor = ()=>{
        if (focussed){
            return colors.primary
        }
        if(error){
            return colors.danger
        }else{
            return colors.grey
        }
    };


    return (
        <View style = {styles.inputContainer}>
            {label  && <Text>{label}</Text>}
            <View style ={[styles.wrapper, 
                {alignItems:icon?"center":"baseline",
                borderColor:getBorderColor(),flexDirection:getFlexDirection()}]}>
                <View>{icon && icon}</View>
                <TextInput
                style = {styles.input}
                onChangeText={onChangeText}
                value={value}

                onFocus={()=>{setFocussed(true)}}
                onBlur={()=>{setFocussed(false)}}
                {...props}
                />
            </View>
            {error && <Text style = {styles.error}>{error}</Text>}
        </View>
    )
}