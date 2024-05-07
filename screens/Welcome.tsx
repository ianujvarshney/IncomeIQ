import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { categoryColors } from '../constants'
import Button from '../components/Button'

export default function Welcome({ navigation }) {
    return (
        <LinearGradient
            style={{
                flex: 1
            }}
            colors={[categoryColors.secondary, categoryColors.primary]}
        >
            <View style={{ flex: 1 }}>
                <View>
                    <Image
                        source={require("../assets/hero1.jpg")}
                        style={{
                            height: 100,
                            width: 100,
                            position: 'absolute',
                            borderRadius: 20,
                            top: 10,
                            transform: [
                                { translateX: 20 },
                                { translateY: 50 },
                                { rotate: "-15deg" }
                            ]
                        }}
                    />
                    <Image
                        source={require("../assets/hero3.jpg")}
                        style={{
                            height: 100,
                            width: 100,
                            borderRadius: 20,
                            position: 'absolute',
                            top: -30,
                            left: 100,
                            transform: [
                                { translateX: 50 },
                                { translateY: 50 },
                                { rotateY: '-5deg' }
                            ],
                        }}
                    />
                    <Image
                        source={require("../assets/hero3.jpg")}
                        style={{
                            height: 100,
                            width: 100,
                            borderRadius: 20,
                            position: 'absolute',
                            top: 130,
                            left: -50,
                            transform: [
                                { translateX: 50 },
                                { translateY: 50 },
                                { rotateY: '15deg' }
                            ],
                        }}
                    />
                    <Image
                        source={require("../assets/hero2.jpg")}
                        style={{
                            height: 200,
                            width: 200,
                            borderRadius: 20,
                            position: 'absolute',
                            top: 110,
                            left: 100,
                            transform: [
                                { translateX: 50 },
                                { translateY: 50 },
                                { rotate: '-15deg' }
                            ]
                        }}
                    />
                    {/*content*/}
                    <View style={{ paddingHorizontal: 22, position: 'absolute', top: 400, width: "100%" }}>
                        <Text style={{ fontSize: 50, fontWeight: '800', color: categoryColors.white }}>Let's Get</Text>
                        <Text style={{ fontSize: 46, fontWeight: '800', color: categoryColors.white }}>Started</Text>
                        <View style={{ marginVertical: 22 }}>
                            <Text style={{ color: categoryColors.white, marginVertical: 4 }}>Track, Budget, Thrive: Your Income, Your Expense, Your App!</Text>
                            <Text style={{ fontSize: 16, color: categoryColors.white }}>Building Bonds Through Every Message Sent!</Text>
                        </View>
                        <Button title="Join Now" onPress={() => navigation.navigate("Signup")} style={{ marginTop: 22, width: "100%" }} />
                        <View style={{ flexDirection: "row", marginTop: 12, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 16, color: categoryColors.white }}>Already have an account ?</Text>
                            <Pressable onPress={() => navigation.navigate("Login")}>
                                <Text style={{ fontSize: 16, color: categoryColors.white, fontWeight: "bold", marginLeft: 4 }}>Login</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </View> 
        </LinearGradient>
    )
}