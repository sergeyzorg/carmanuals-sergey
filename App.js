import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <Text style={styles.textmain}>Hello Car Manuals 3!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',    
  },
  textmain: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',    
    fontSize: 22,
    fontWeight: "600",
    color: "red"
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});