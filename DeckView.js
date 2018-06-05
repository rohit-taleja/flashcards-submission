import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet
} from "react-native";

class DeckView extends Component {
  
  
  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Animated.View>
        <Text style={style.deckTitle}>Title : {this.props.navigation.state.params.deck}</Text>
        <Text style={style.cards}>Number of Questions : {this.props.navigation.state.params.count} </Text>
        <TouchableOpacity
          style={style.button}
          onPress={() => navigate("AddQuestion",{title:this.props.navigation.state.params.deck})}
        >
          <Text>Add Question</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.button}
          onPress={() => navigate("QuizView",{title:this.props.navigation.state.params.deck})}
        >
          <Text>Start Quiz</Text>
        </TouchableOpacity>
      </Animated.View>
    );
  }
}

const style = StyleSheet.create({
  deckTitle: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold"
  },
  cards: {
    marginTop: 8
  },
  button: {
    marginTop: 18,
    borderWidth: 1,
    borderRadius: 5,
    padding: 7,
    backgroundColor: "#f18973"
  }
});

export default DeckView;
