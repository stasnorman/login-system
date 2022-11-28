import axios from "axios";
import React, { useState } from "react";
import { StyleSheet, Text, ScrollView, View, Button, Platform, TextInput } from "react-native";

export function PageLogIn({navigation}){
    
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const onLoginHandler = (login) => setLogin(login);
    const onPasswordHandler = (password) => setPassword(password);

    const onSubmitFormHandler = async () => {
        try {
            const responseGet = await axios.get(`https://test-api.easy4.ru/auth?login=${login}&password=${password}`, {});

            // const responsePost = await axios.post(`https://test-api.easy4.ru/create-user`, {
            //     login,
            //     password,
            //     role_id: "Клиент",
            // });

            if (responseGet.status === 200) {
                navigation.reset(
                    {
                    index: 0,
                    routes: [{name: 'Окно пользователя'}]
                });
            }else {
                throw new Error("Данные невозможно получить");
            }
        } catch (error) {
            alert(error);
        }
    }
    
    return(
        <ScrollView>
        <View>
          <View>
            <TextInput placeholder="Введите логин..." style={styleLogIn.txbStyle} value={login} onChangeText={onLoginHandler} />
            <TextInput placeholder="Введите пароль..." style={styleLogIn.txbStyle} value={password} onChangeText={onPasswordHandler} />
          </View>
  
          <View>
            <Button title="Отправить" onPress={onSubmitFormHandler} />
          </View>
        </View>
      </ScrollView>
    );
}

const styleLogIn=StyleSheet.create(
    {
        txbStyle: {
            marginLeft: 10,
            alignItems: 'center',
            justifyContent: 'center',
        }
    }
);