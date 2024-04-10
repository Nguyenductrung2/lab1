import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Exercise1 = () => {
    return (
        <View style={MyStyle.ViewStyle}>
            <Text style={MyStyle.TextStyle}>Hello World</Text>
        </View>
    );
}

var MyStyle = StyleSheet.create({
    ViewStyle: {
        flex: 1,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    TextStyle: {
        color: 'black',
        fontSize: 60,
    }
});

export default Exercise1;
