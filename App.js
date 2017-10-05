// Import a Library to help create component

import React from 'react';
import { View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create Component

const App = () => (
  <View>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

export default App;
