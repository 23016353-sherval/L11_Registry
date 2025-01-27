import React, { useState } from 'react';
import { StatusBar, View, TouchableOpacity, Text, TextInput, StyleSheet } from 'react-native';

const stylesAdd = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fce4ec',
    },
    input: {
        borderWidth: 1,
        borderColor: '#d81b60',
        padding: 10,
        marginVertical: 8,
        borderRadius: 8,
        backgroundColor: '#ffffff',
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
        color: '#880e4f',
    },
    button: {
        backgroundColor: '#7b1fa2',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginVertical: 10,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

const Add = ({ navigation, route }) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNum, setPhoneNum] = useState("");

    return (
        <View style={stylesAdd.container}>
            <StatusBar barStyle='dark-content' backgroundColor='#fce4ec' />
            <Text style={stylesAdd.label}>Username:</Text>
            <TextInput style={stylesAdd.input} onChangeText={(text) => setUsername(text)} />

            <Text style={stylesAdd.label}>Email:</Text>
            <TextInput style={stylesAdd.input} onChangeText={(text) => setEmail(text)} keyboardType='email-address' />

            <Text style={stylesAdd.label}>Phone Number:</Text>
            <TextInput style={stylesAdd.input} onChangeText={(text) => setPhoneNum(text)} keyboardType='phone-pad' />

            <TouchableOpacity style={stylesAdd.button} onPress={() => {
                let mydata = JSON.parse(route.params.datastr);
                let item = { name: username };
                mydata.push(item);
                fetch("https://191f0a68542b422fa09ccc17e2557252.api.mockbin.io/", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "191f0a68542b422fa09ccc17e2557252"
                    },
                    body: JSON.stringify(mydata)
                })
                    .then(() => {
                        navigation.navigate("Home");
                    });
            }}>
                <Text style={stylesAdd.buttonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Add;
