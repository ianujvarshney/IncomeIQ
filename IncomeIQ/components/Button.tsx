import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { categoryColors } from '../constants'

export default function Button(props: any) {
    const filledBgColor = props.color || categoryColors.primary;
    const outlinedColor = categoryColors.white;
    const bgColor = props.filled ? filledBgColor : outlinedColor;
    const textColor = props.filled ? categoryColors.white : categoryColors.primary;
    return (
        <View>
            <Pressable onPress={props.onPress} style={{ ...styles.button, ...{ backgroundColor: bgColor }, ...props.style }}>
                <Text style={{ fontSize: 18, ...{ color: textColor } }}>{props.title}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingBottom: 16,
        paddingVertical: 10,
        borderColor: categoryColors.primary,
        borderWidth: 2,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center'
    }
})