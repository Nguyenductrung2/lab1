import React,{useState} from "react";
import { Text, View, StyleSheet, Alert, TouchableHighlight } from "react-native";

const Exercise2 = () => {

    const onPress = () => {
        Alert.alert('.................')
    }

    return (           
        <View style={styles.container}>
            <TouchableHighlight
                style={styles.button}
                onPress={onPress}
            >
                <Text style={styles.textButton}>
                    Nhấn Vào Đây
                </Text>
            </TouchableHighlight>
        </View>
    )
}
export default Exercise2;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#111111',
  },
  button: {
    width: '100%',
    padding: 10,
    backgroundColor: '#FFCC66',
    alignItems: "center",
    borderRadius: 20,
  },
  textButton: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white'
  },
});