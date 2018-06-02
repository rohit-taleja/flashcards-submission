import {AsyncStorage} from 'react-native'
import {asyncobj} from './AddQuestion'

export const asyncobj={
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}

export function getDecks() {
  return AsyncStorage.getItem(asyncobj, (err, result) => {
    
    return JSON.parse(result);
  });
}

export function AddDeckTitle(title) {
  debugger
  const newobj={
   abc:"ggg"
  }
  console.log("newobj",newobj)
   AsyncStorage.setItem('name',"111");
   
    
  AsyncStorage.getItem('name').then((value)=>{
    console.log("value",value)
      })
   
  return 0
}
