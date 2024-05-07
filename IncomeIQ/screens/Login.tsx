import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Image, Pressable } from 'react-native'
import React, { useState } from 'react';
import { categoryColors } from '../constants'
import { Ionicons } from '@expo/vector-icons';
import { Checkbox } from 'expo-checkbox'
import Button from '../components/Button';

const Login = ({ navigation }) => {
  const [isPasswordShow, setisPasswordShow] = useState(false);
  const [isChecked, SetIsChecked] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: categoryColors.white }}>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <View style={{ marginVertical: 50 }}>
          <Text style={{ fontSize: 22, fontWeight: 'bold', marginVertical: 12, color: categoryColors.black }}>Hey Welcome back !</Text>
          <Text style={{ fontSize: 16, color: categoryColors.black }}>Hello again you have been missed !</Text>
        </View>
        <View style={{ marginBottom: 12 }}>
          <Text style={{ fontSize: 16, fontWeight: '400', marginVertical: 8 }}>Email address</Text>
          <View style={{ width: '100%', height: 48, borderColor: categoryColors.black, borderWidth: 1, borderRadius: 8, alignItems: 'center', justifyContent: 'center', paddingLeft: 22 }}>
            <TextInput placeholder='Enter your email address' placeholderTextColor={categoryColors.black} keyboardType="email-address" style={{ width: '100%' }} />
          </View>
        </View>
        <View style={{ marginBottom: 12 }}>
          <Text style={{ fontSize: 16, fontWeight: '400', marginVertical: 8 }}>Password</Text>
          <View style={{ width: '100%', height: 48, borderColor: categoryColors.black, borderWidth: 1, borderRadius: 8, alignItems: 'center', justifyContent: 'center', paddingLeft: 22 }}>
            <TextInput placeholder='Enter your password' placeholderTextColor={categoryColors.black} secureTextEntry={isPasswordShow} style={{ width: '100%' }} />
            <TouchableOpacity onPress={() => setisPasswordShow(!isPasswordShow)} style={{ position: 'absolute', right: 12 }}>
              {
                isPasswordShow ? <Ionicons name='eye-off' size={24} color={categoryColors.black} /> : <Ionicons name='eye' size={24} color={categoryColors.black} />
              }
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: 'row', marginVertical: 6 }}>
          <Checkbox style={{ marginRight: 8 }} value={isChecked} onValueChange={() => SetIsChecked(!isChecked)} color={isChecked ? categoryColors.primary : undefined} />
          <Text>Remember me</Text>
        </View>
        <Button title="Login" filled style={{ marginTop: 18, marginBottom: 4, color: categoryColors.white }} />
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>
          <View style={{ flex: 1, height: 1, backgroundColor: categoryColors.grey, marginHorizontal: 10 }} />
          <Text style={{ fontSize: 14 }}>Or Login with </Text>
          <View style={{ flex: 1, height: 1, backgroundColor: categoryColors.grey, marginHorizontal: 10 }} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity onPress={() => console.log("Pressed")} style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', height: 52, borderWidth: 1, borderColor: categoryColors.grey, marginRight: 4, borderRadius: 10 }}>
            <Image source={require('../assets/facebook.png')} style={{ height: 36, width: 36, marginRight: 8 }} /><Text>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("Pressed")} style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', height: 52, borderWidth: 1, borderColor: categoryColors.grey, marginRight: 4, borderRadius: 10 }}>
            <Image source={require('../assets/google.png')} style={{ height: 36, width: 36, marginRight: 8 }} /><Text>Google</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 22 }}>
          <Text style={{ fontSize: 16, color: categoryColors.black }}>Don't have an account ?</Text>
          <Pressable onPress={() => navigation.navigate("Signup")}><Text style={{
            fontSize: 16, color: categoryColors.primary, fontWeight: 'bold', marginLeft: 6
          }}>Sign up</Text></Pressable>
        </View>
      </View>
    </SafeAreaView >
  )
}

export default Login;