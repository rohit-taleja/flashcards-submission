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
import _ from 'lodash';
class DefaultView extends Component {
  state={
    allDecks:[
       {
        "asyncobj":"no Questions"
      }
    ]
  }
  
  
  componentDidMount(){
    AsyncStorage.getItem("obj", (err, result) => {
      this.setState({allDecks:JSON.parse(result)})
    });
  }
  render() {
    
    const { navigate } = this.props.navigation;
    // debugger
    let obj2=this.state.allDecks
    if(obj2.JavaScript){
    let obj4=obj2.JavaScript
    }
    let obj3=[]
    let i=0
    let count=[]
    let j=0
  _.forEach(obj2, function(value, key) {
    console.log(key + ' ' + value)
    
    _.forEach(value, function(values, key) {
      console.log(key + ' ' + values)
      if(key=="questions"){
      count[j]=values.length
      j=j+1
      }
    })
      if(key){
    obj3[i]=key
    i=i+1
      }
    
});
  console.log(obj3)
    return (
      <View style={style.container}>
      {obj3.map((deck,index)=>(
        <View  key={index}>
        <Text   onPress={() => navigate("DeckView",{deck:`${deck}`,count:`${count[index]}`})} style={style.header}>
          {deck}
        </Text>
        <Text >
          number of questions:{count[index]}
        </Text>
        </View>
       ))}
     
        <KeyboardAvoidingView>
          <TouchableOpacity style={style.button}>
            <Text onPress={() => navigate("AddNewDeck")}>Add New Deck</Text>
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
