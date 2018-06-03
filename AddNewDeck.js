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
  state = {
    text:"dd"
  }
  
onSubmit=()=>{
  debugger
  console.log(this.state.text)
  let title=this.state.text
  AsyncStorage.mergeItem("obj", JSON.stringify({
    [title]:{
        title,
        questions:[]
  }}), () => {
    AsyncStorage.getItem("obj",(err,res)=>{
      console.log(res)
    })
  })
    console.log("sa")
  } 
  render()
   {
     console.log(this.state.title)
    const { navigate } = this.props.navigation;
       return(
      <View style={style.container}>
        <Text style={style.header}>Enter Title for new deck</Text>
        
          <TextInput   onChangeText={(text) => this.setState({text})}
        placeholder={"Enter title"}
        style={style.input}  />
          <TouchableOpacity style={style.button}>
            <Text onPress={this.onSubmit}>Submitt</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.button}>
            <Text>Back</Text>
          </TouchableOpacity>
        
      </View>
    )
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
