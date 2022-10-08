import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import img1 from '../../assets/nature.jpg';

const ImageFile = () => {
    return (
        <View>
            <Text style={styles.textStyle}>hello world</Text>
            <Image source={require("../../assets/nature.jpg")} style={styles.imageStyle} />
        </View>
    );
}
const styles = StyleSheet.create({
    textStyle: {
        color: 'white',
        FontSize: 30,
        backgroundColor: 'red',
    },
    imageStyle: {
        height: 300,
        width: 300,
    }
});
export default ImageFile;

