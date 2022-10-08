import React from 'react';
import {View } from 'react-native';
import FlatListDemo from './src/screen/FlatListDemo';
import ImageFile from './src/screen/ImageFile';

const App = () => {
  return (
    <View>
      <FlatListDemo />
      <ImageFile />
    </View>
  );
}

export default App;