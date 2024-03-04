import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, View, } from 'react-native';
import Header from "./components/Header";
import Albumlist from './components/Albumlist';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Albumlist></Albumlist>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    paddingHorizontal: 10,
  }
});
