import axios from "axios";
import React, { useState } from "react";
import {TextInput, View, Button} from "react-native";


export function PageMain({navigation}) {
    
    const onSubmitFormHandler = async () => {
        navigation.reset(
            {
                index: 0,
                routes: [{name: "Профиль пользователя"}]
            });
    };
    
    return (        
        <View>
            <TextInput placeholder="Введите логин..."/>
            <TextInput placeholder="Введите пароль..."/>

            <Button title="Войти" onPress={onSubmitFormHandler} />
        </View>
    );
}