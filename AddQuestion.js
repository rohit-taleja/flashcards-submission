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


class AddQuestion extends Component {
  state = {
    name: ""
  };
  componentDidMount() {
    debugger
  }

  onSubmit = () => {
     let asyncobj = {
      React: {
        title: "React",
        questions: [
          {
            question: "What is React?",
            answer: "A library for managing user interfaces"
          },
          {
            question: "Where do you make Ajax requests in React?",
            answer: "The componentDidMount lifecycle event"
          }
        ]
      },
      JavaScript: {
        title: "JavaScript",
        questions: [
          {
            question: "What is a closure?",
            answer:
              "The combination of a function and the lexical environment within which that function was declared."
          }
        ]
      }
    };
    let value = { ujjawal: "RAM" };
    let newobj = {
      abc: "ggg"
    };
    
    AsyncStorage.clear()
    AsyncStorage.setItem("obj", JSON.stringify(asyncobj), () => {
      AsyncStorage.mergeItem("obj", JSON.stringify(value), () => {
        AsyncStorage.getItem("obj", (err, result) => {
          console.log(result);
        });
      });
     });
      AsyncStorage.getAllKeys((err,res)=>{
          console.log(res)
      })
    console.log("sa");
  };
  render() {
    
    const { navigate } = this.props.navigation;
    return (
      <View style={style.container}>
        <Text style={style.header}>New Question</Text>
        <KeyboardAvoidingView>
          <Text style={{ marginTop: 14 }}>Question:</Text>
          <TextInput 
          style={style.input} placeholder={"Enter Question"} />
          <Text style={{ marginTop: 14 }}>Answer:</Text>
          <TextInput
            style={style.input}
            placeholder={"Enter Answer to Question"}
          />
          <TouchableOpacity style={style.button}>
            <Text onPress={this.onSubmit}>Submitt</Text>
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
export default AddQuestion;
