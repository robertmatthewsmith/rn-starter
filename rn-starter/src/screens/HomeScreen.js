import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  
  return <View>
    <Text style={styles.text}>Hi There!</Text>
   <Button 
   onPress={() => navigation.navigate('Components')}
   title="Go Components Demo"
  /> 
  <Button
    title="Go to list Demo"
    onPress={() => navigation.navigate('List')}
  />
</View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;