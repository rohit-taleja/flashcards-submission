import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet,
  Alert,
   AsyncStorage
} from "react-native";
import _ from 'lodash';

class AddQuestion extends Component {
  state = {
    question:"",
    answer:"",
    isSubmitted:false
  };
  

  onSubmit = () => {
    debugger
     let que=this.state.question
     let ans=this.state.answer  
     let title = this.props.navigation.state.params.title
     
     let arr={question:que,
      answer:ans}
    
      let deck=[]
     AsyncStorage.getItem("obj", (err, result) => {
      let Allquestions=JSON.parse(result)
      _.forEach(Allquestions, function(value, key) {
        console.log(key + ' ' + value)
          if(key==title){
        _.forEach(value, function(values, key) {
          console.log(key + ' ' + values)
          if(key=="questions")
          {
            deck=values
          }
        })
      }
      })
      deck=deck.concat([arr])
      console.log(deck)

      AsyncStorage.mergeItem("obj", JSON.stringify(
        {
          [title]:{
              title,
              questions:deck
        }}
      ), () => {
        AsyncStorage.getItem("obj", (err, result) => {
          console.log(JSON.parse(result));
          this.setState({isSubmitted:true})
        });
      });

    })
      
      
     
  }
  render() {
    // debugger
    console.log("props are",this.props.navigation.state.params)
    const { navigate } = this.props.navigation;
    return (
      
      <View style={style.container}>
      {!this.state.isSubmitted?(
        <View>
        <Text style={style.header}>New Question</Text>
        <KeyboardAvoidingView>
          <Text style={{ marginTop: 14 }}>Question:</Text>
          <TextInput onChangeText={(text) => this.setState({question:text})}
          style={style.input} placeholder={"Enter Question"} />
          <Text style={{ marginTop: 14 }}>Answer:</Text>
          <TextInput  onChangeText={(text) => this.setState({answer:text})}
            style={style.input}
            placeholder={"Enter Answer to Question"}
          />
          <TouchableOpacity style={style.button}>
            <Text onPress={this.onSubmit}>Submitt</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
        </View>
        ):(
          <View>
            <Text>Question Submitted</Text>
            </View>
        )}
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
export default AddQuestion;
