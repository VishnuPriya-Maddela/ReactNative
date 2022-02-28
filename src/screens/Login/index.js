import React, {useState} from 'react'
import {Text,View, TextInput} from 'react-native';
import {Container} from '../../components/common/Container/index'
import Input from '../../components/common/Input/index'
import CustomButton from '../../components/common/CustomButton/index'
export const Login = () => {
    const [value, onChangeText] = useState("");
    return (
        <Container>
            <Input
            label="Username"
            onChangeText={(text)=>onChangeText(text)}
            value={value}
            icon={<Text>HIDE</Text>}
            iconPosition = "right"
            />

            <Input
            label="Password"
            onChangeText={(text)=>onChangeText(text)}
            value={value}
            icon={<Text>HIDE</Text>}
            iconPosition = "right"
            />  

            <CustomButton secondary title = "Submit" loading = {true} disabled={true}/>
            <CustomButton secondary title = "Click Me" loading = {true} />
            <CustomButton primary title = "Submit" loading = {true} disabled={true}/>
            <CustomButton danger title = "Submit" />
        </Container>
    )
}