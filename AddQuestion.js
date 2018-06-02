import React, { Component } from 'react';
import { Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity, StyleSheet, Alert } from 'react-native';
class AddQuestion extends Component { 
  state = {
    'name': ''
 }
 componentDidMount  () {
   debugger
}

  onSubmit = () => {
   let value={ujjawal:"RAM"}
   let newobj={
    abc:'ggg'
   }
     AsyncStorage.setItem('ujjawal123',JSON.stringify(newobj) ,()=>{
      AsyncStorage.mergeItem('ujjawal123', JSON.stringify(value), () => {
     AsyncStorage.getItem('ujjawal123', (err, result) => { 
      console.log(result);
    });
  })
})
     console.log("sa")
   }
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={style.container} >
        <Text style={style.header} >New Question</Text>
        <KeyboardAvoidingView>
          <Text style={{marginTop: 14}} >Question:</Text>
          <TextInput style= {style.input}  placeholder={'Enter Question'} />
          <Text style={{marginTop: 14}} >Answer:</Text>
          <TextInput style= {style.input}   placeholder={'Enter Answer to Question'} />
          <TouchableOpacity style={style.button} >
            <Text onPress={this.onSubmit}>Submitt</Text>
          </TouchableOpacity>
          
        </KeyboardAvoidingView>
      </View>
    )
  }
}
const style = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    paddingTop: 12,
  },
  input: {
    width: 250,
    paddingTop: 12,
    fontSize: 18,
  },
  button: {
    borderWidth: 1,
    padding: 12,
    margin: 50,
    borderRadius: 5,
    backgroundColor: '#f18973',
    alignItems: 'center'
  }
})
export default AddQuestion