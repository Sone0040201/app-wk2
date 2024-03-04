import React from "react";
import {  StyleSheet, Text,
          View, StatusBar, SafeAreaView 
      } from "react-native";

const Header = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <View style={styles.headerStyle}>
        <Text style={styles.textStyle}>
            魔女達の唄
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "lightgray",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    shadowColor: "#380401",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    elevation: 2
  },
  textStyle: {
    fontSize: 24,
    fontWeight: "bold"
  }
});

export default Header;
