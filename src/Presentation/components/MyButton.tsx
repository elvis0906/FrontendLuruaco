import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";


interface Props{
  text: string,
  onPress: ( ) => void
}

export default function MyButton({text, onPress} : Props) {
  return (
    <TouchableOpacity 
        style={styles.roundedButton}
        onPress={() => onPress()}
    >
        <Text style={styles.textButton}>{text}</Text>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  roundedButton:{
    width: '100%',
    height: 50,
    backgroundColor: COLORS.Light_orange,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15
  },

  textButton:{
    color: COLORS.white,
    fontWeight: 'bold'
  }
})

 