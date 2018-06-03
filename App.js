import React ,{ Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Button } from 'react-native';

import {  StackNavigator } from 'react-navigation';
import AddQuestion from './AddQuestion'
import DeckView from './DeckView'
import QuizView from './QuizView'
import AddNewDeck from './AddNewDeck'
import DefaultView from './defaultview'
const App = StackNavigator({
  DefaultView:{
    screen:DefaultView
  },
  DeckView:{
    screen:DeckView
  },
  AddNewDeck:{
    screen:AddNewDeck
  },
  AddQuestion: {
    screen: AddQuestion
  },
  QuizView:{
    screen:QuizView
  }
  
}
)   

export default App