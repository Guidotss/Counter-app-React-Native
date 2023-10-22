import React, { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const CounterScreen = () => {
  const [ counter, setCounter ] = useState<number>(0);

  return (
    <View style={styles.container}>
      <Text style={styles.counter}>Counter: { counter }</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={ styles.button } onPress={() => setCounter(counter + 1)}>
          <Text style={styles.textButton}>+</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={ styles.button } onPress={() => setCounter(counter > 0 ? counter - 1 : 0)}>
          <Text style={styles.textButton}>-</Text>
        </TouchableOpacity>
        
        
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"black",
  },
  counter: {
    textAlign: "center",
    fontSize: 45,
    fontWeight: "600",
    top: -15,
    color: "white",
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 50,
    top: 20,
  },
  button:  {
    backgroundColor: "pink", 
    padding: 10,
    width: 50,
    height: 50,
    borderRadius: 100,
    
  },

  textButton:  {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  }
});
