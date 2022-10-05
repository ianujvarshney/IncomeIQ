import React from "react";
import { Text, FlatList, StyleSheet } from 'react-native';

const FlatListDemo = () => {
    const names = [
        {
            name: "anuj",
        },
        {
            name: "kumar",
        },
        {
            name: "Gupta",
        },
        {
            name: "Gupta",
        },
        {
            name: "Gupta",
        },
        {
            name: "Gupta",
        },
        {
            name: "Gupta",
        },
    ]
    return (
        <FlatList
            style={styles.listStyle}
            horizontal
            data={names}
            renderItem={(element) => {
                return <Text style={styles.textStyle} >{element.item.name}</Text>;
            }}
        />
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 40,
        color: "white",
        backgroundColor: "blue",
        padding: 30,
        margin: 20,
    },
    listStyle: {
        textAlign: "center",
        margin: 20,
        padding: 10,
    },
});

export default FlatListDemo;