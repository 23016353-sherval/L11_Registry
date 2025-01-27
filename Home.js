import React, { useState, useEffect } from 'react';
import { StatusBar, TouchableOpacity, FlatList, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#e3f2fd',
    },
    listStyle: {
        borderWidth: 1,
        borderColor: '#0288d1',
        padding: 15,
        marginVertical: 8,
        borderRadius: 10,
        backgroundColor: '#ffffff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    button: {
        backgroundColor: '#ff7043',
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
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#37474f',
    },
});

const Home = ({ navigation }) => {
    const [myData, setMyData] = useState([]);

    useEffect(() => {
        fetch("https://191f0a68542b422fa09ccc17e2557252.api.mockbin.io/")
            .then((response) => response.json())
            .then((myjson) => setMyData(myjson));
    }, []);

    const renderItem = ({ item }) => (
        <View style={styles.listStyle}>
            <Text style={styles.text}>{item.username}</Text>
            <Text>{item.email}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <StatusBar barStyle='dark-content' backgroundColor='#e3f2fd' />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Add", { datastr: JSON.stringify(myData) })}>
                <Text style={styles.buttonText}>Register User</Text>
            </TouchableOpacity>
            <FlatList data={myData} renderItem={renderItem} keyExtractor={(item, index) => index.toString()} />
        </View>
    );
};

export default Home;

