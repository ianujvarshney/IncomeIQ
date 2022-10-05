import React from "react";
import { Text, StyleSheet, View } from "react-native";

const CustomComponents = () => {
    return (
        <Text style={styles.textStyle}>Hello World</Text>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        color: '#333',
        fontSize: 30,
        fontWeight: 'bold',
        backgroundColor: 'yellow',
        textAlign: 'center'
    },
});
export default CustomComponents;