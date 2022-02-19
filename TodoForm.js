import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from "react";
const FormTodo = ({ addTodo }) => {
     const [value, setValue] = React.useState("");
     const handleSubmit = () => {
         
          if (!value) return;
          addTodo(value);
          setValue("");
        };
        const  handleTextChang=(text)=>{
          setValue(text)
      }
     return ( <>
       <View style={styles.container}>
               <Text style={{marginTop:10}}>Add New Todo</Text>
               <StatusBar style="auto" />
               <TextInput
                    style={styles.input}
                    onChangeText={handleTextChang}
                    value={value}
                    placeholder="input"
               />
               <Button
               style={{marginBottom:10}}
                    onPress={handleSubmit}
                    title="ADD"
                    color="#000"
                    accessibilityLabel="Learn more about this purple button"
               />
                    <Text></Text>
          </View>
     </> );
}
const styles = StyleSheet.create({
     container: {
          marginTop:40 ,
          backgroundColor: 'aqua',
          alignItems: 'center',
          justifyContent: 'center',
     },
    
});
export default FormTodo;