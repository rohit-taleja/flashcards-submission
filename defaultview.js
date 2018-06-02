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

class DefaultView extends Component {


  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={style.container}>
        <Text onPress={() =>navigate('DeckView')} style={style.header}>
           Title 
        </Text>
        <KeyboardAvoidingView>
          <TouchableOpacity style={style.button}>
            <Text onPress={() =>navigate('AddNewDeck')}>Add New Deck</Text>
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
export default DefaultView;
