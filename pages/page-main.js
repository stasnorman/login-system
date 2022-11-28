import axios from "axios";
import React, { useState } from "react";
import { StyleSheet, Text, ScrollView, View, Button, Platform, TextInput } from "react-native";
import Constants from "expo-constants";

export function PageUser(){

    return(
        <ScrollView>
        <View style={styleLogIn.viewStyle}>
            <Text>Это окно после авторизации</Text>
        </View>
      </ScrollView>
    );
}

const styleLogIn=StyleSheet.create(
    {
        viewStyle:{
            margin: 5
        },
        txbStyle: {
            marginLeft: 10,
            alignItems: 'center',
            justifyContent: 'center',
        }
    }
);