import React, { Component } from "react";
import { AsyncStorage } from "react-native";
import {
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet,
  Alert
} from "react-native";

class AddNewDeck extends Component {
  
  
  render() {
    const { navigate } = this.props.navigation;
    return (
      
        <View style={style.container}>
          <Text style={style.header}>Enter Title for new deck</Text>
          <KeyboardAvoidingView>
            <TextInput
              style={style.input}
              placeholder={"Enter new Deck title"}
            />
            <TouchableOpacity style={style.button}>
              <Text>Submitt</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.button}>
              <Text>Back</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      
    );
  }
}
const style = StyleSheet.create({
  container: {
    alignItems: "center"
  },
  header: {
    fontSize: 20,
    paddingTop: 12
  },
  input: {
    width: 250,
    paddingTop: 12,
    fontSize: 18
  },
  button: {
    borderWidth: 1,
    padding: 12,
    margin: 50,
    borderRadius: 5,
    backgroundColor: "#f18973",
    alignItems: "center"
  }
});
export default AddNewDeck;
