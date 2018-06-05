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
import _ from "lodash";
import FlipCards from "./flipcard";

class QuizView extends Component {
  state = {
    queans: [],
    index: 0,
    score: 0
  };

  componentDidMount() {
    // debugger
    let title = this.props.navigation.state.params.title;
    let deck = [];
    AsyncStorage.getItem("obj", (err, result) => {
      let Allquestions = JSON.parse(result);
      _.forEach(Allquestions, function(value, key) {
        console.log(key + " " + value);
        if (key == title) {
          _.forEach(value, function(values, key) {
            console.log(key + " " + values);
            if (key == "questions") {
              deck = values;
            }
          });
        }
      });
      this.setState({ queans: deck });
      let obj2 = this.state.queans[0];
      console.log(obj2); //working
    });
  }

  onSubmitCorrect = () => {
    let ans = this.state.queans[this.state.index].answer;
    if (ans == "yes") {
      this.state.score = this.state.score + 1;
    }
    let obj = this.state.index + 1;
    this.setState({ index: obj });
  };
  onSubmitIncorrect = () => {
    debugger;
    let ans = this.state.queans[this.state.index].answer;
    if (ans == "no") {
      this.state.score = this.state.score + 1;
    }
    let obj = this.state.index + 1;
    this.setState({ index: obj });
  };

  render() {
    const { navigate } = this.props.navigation;

    const obj = this.state.queans[this.state.index];
    const questionNumber = this.state.index + 1;
    return (
      <View style={style.container}>
        {this.state.queans.length ? (
          <View>
            <Text style={style.header}>Quiz</Text>
            {/* {this.state.queans.length > this.state.index ? (
              <View> */}
                <Text style={style.header}>
                  Questions number:{questionNumber}/{this.state.queans.length}
                </Text>
                <KeyboardAvoidingView>
                  <FlipCards data={this.state.queans[this.state.index]} />
                  <TouchableOpacity style={style.button}>
                    <Text onPress={this.onSubmitCorrect}>CORRECT</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={style.button}>
                    <Text onPress={this.onSubmitIncorrect}>INCORRECT</Text>
                  </TouchableOpacity>
                </KeyboardAvoidingView>
              {/* </View>
            ) : (
              <View>
                <Text style={style.header}>
                  your final score is :{this.state.score} out of total{" "}
                  {this.state.queans.length}
                </Text>
              </View>
            )} */}
          </View>
        ) : (
          <View>
            <Text>loading...</Text>
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
    margin: 20,
    top: -250,
    borderRadius: 5,
    backgroundColor: "#f18973",
    alignItems: "center"
  }
});
export default QuizView;
