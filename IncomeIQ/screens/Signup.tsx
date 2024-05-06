import { View, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react';
import { categoryColors } from '../constants'
import { Ionicons } from '@expo/vector-icons';

const Signup = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: categoryColors.White }}>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <View style={{ marginVertical: 22 }}>
          <Text style={{ fontSize: 22, fontWeight: 'bold', marginVertical: 12, color: categoryColors.black }}>Create Account</Text>
          <Text style={{ fontSize: 16, color: categoryColors.black }}>Connect with your friend today!</Text>
        </View>
        <View style={{ marginBottom: 12 }}>
          <Text style={{ fontSize: 16, fontWeight: 400, marginVertical: 8 }}>Email address</Text>
          <View style={{ width: '100%', height: 48, borderColor: categoryColors.black, borderWidth: 1, borderRadius: 8, alignItems: 'center', justifyContent: 'center', paddingLeft: 22 }}>
            <TextInput placeholder='Enter your email address' placeholderTextColor={categoryColors.black} keyboardType="email-address" style={{ width: '100%' }} />
          </View>
        </View>
        <View style={{ marginBottom: 12 }}>
          <Text style={{ fontSize: 16, fontWeight: 400, marginVertical: 8 }}>Mobile Number</Text>
          <View style={{ width: '100%', height: 48, borderColor: categoryColors.black, borderWidth: 1, borderRadius: 8, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 22 }}>
            <TextInput placeholder='+91' placeholderTextColor={categoryColors.black} keyboardType="numeric" style={{ width: '12%', borderRightWidth: 1, borderRightColor: categoryColors.grey, height: '100%' }} />
            <TextInput placeholder='Enter your phone number' placeholderTextColor={categoryColors.black} keyboardType="numeric" style={{ width: '80%' }} />
          </View>
        </View>
        <View style={{ marginBottom: 12 }}>
          <Text style={{ fontSize: 16, fontWeight: 400, marginVertical: 8 }}>Password</Text>
          <View style={{ width: '100%', height: 48, borderColor: categoryColors.black, borderWidth: 1, borderRadius: 8, alignItems: 'center', justifyContent: 'center', paddingLeft: 22 }}>
            <TextInput placeholder='Enter your password' placeholderTextColor={categoryColors.black} secureTextEntry style={{ width: '100%' }} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Signup;