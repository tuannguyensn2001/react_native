import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect } from 'react';
import { Button, ThemeProvider } from 'react-native-elements';

export default function App() {

  useEffect(() => {
    console.log("hello");
  }, [])

  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <Text>Hello</Text>
    //   <StatusBar style="auto" />
    // </View>

    <ThemeProvider>
      <Button title="hello" loading={true}></Button>
      <Text>Hello</Text>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
