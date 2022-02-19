import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { LayoutAnimation } from 'react-native';
import { NativeModules } from 'react-native';
import { styles } from "./Style";
const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
     UIManager.setLayoutAnimationEnabledExperimental(true);
const AddTodo = ({ onTodoAdd }) => {
     const [focus, setFocus] = useState(false);
     const [todo, setTodo] = useState('')
     const handlFocus = () => {
          setFocus(true)
          LayoutAnimation.spring()
     }
     const handlBlur = () => {
          setFocus(false)
          LayoutAnimation.linear()
     }
     const changeTextHanderlar = (text) => {
          setTodo(text)
     }
     const addBtnPressHandler = () => {
          let todoObj = {
               title: todo,
               done: false
          }
          console.log(todoObj);
          if (todo != '') {
               onTodoAdd(todoObj)
          }
          setTodo('')
     }
     return (<View >
          <Text style={styles.title} >
               TODO APP
          </Text >
          <View style={styles.addToDoContainer}>


               <TextInput value={todo} onChangeText={changeTextHanderlar} onFocus={handlFocus} onBlur={handlBlur} style={{ ...styles.input, ...(focus ? styles.inputFocus : {}) }} placeholder="Enter Todo" />
               <TouchableOpacity style={styles.btnContainer}
                    onPress={addBtnPressHandler}
               >
                    <Text style={styles.btn}>
                         ADD TODO
                    </Text>
               </TouchableOpacity>
               <TextInput placeholder="" />
          </View>
     </View>);
}

export default AddTodo;