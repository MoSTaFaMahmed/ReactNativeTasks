import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button,TouchableOpacity } from 'react-native';
import React, { useState } from "react";
const Todo = ({ todo, index, markTodo, removeTodo }) => {

     return (<>
          <View style={styles.container}>

               <Text style={{ textDecoration: todo.isDone ? "line-through" : " " }}>{todo.text}</Text>
               <View style={{ flexDirection: 'row' }}>
                    <Button
                     onPress={markTodo(index)}
                         title="Done"
                         color="#841584"
                         accessibilityLabel="Learn more about this purple button"
                    />

                    <Button
                      onPress={removeTodo(index)}
                         title="Delete"
                         color="#841584"
                         accessibilityLabel="Learn more about this purple button"
                    />
               </View>
          </View>

     </>);
}
const styles = StyleSheet.create({
     container: {
          marginTop: 40,
          backgroundColor: 'black',
          alignItems: 'center',
          justifyContent: 'space-between',
          color:'black'
     },


});
export default Todo;