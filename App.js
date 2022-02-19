import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from "react";
import Slider from './Slider';
import Header from './Header';
import FormAddTodo from './FormAddTodo'
import Todos from './Todos';
export default function App() {
  const [todos, setTodos] = useState([
   

  ])
  const[counter,setCounter]=useState(0);
  const todoAddHandler = (todo) => {
    setTodos([...todos, todo]);
      }
      const removeTodoHandler=(index)=>{
        const newTodos = todos.filter((_,todo)=>todo!==index);
        setTodos(newTodos);
      }
      const markTodoHandler = index => {
        const newTodos = [...todos];
        newTodos[index].done = !newTodos[index].done;
          setTodos(newTodos);
          countTodos()
      };
      const countTodos=()=>{
      const items=todos.filter((item)=>item.done==true)
      setCounter(items.length)
      }
  return (
    <View style={{height:'100%'}}>
      <StatusBar hidden />
      <FormAddTodo onTodoAdd={todoAddHandler} />
      <Todos list={todos} counter={counter} onTodoDelete={removeTodoHandler} onMark={markTodoHandler} />

    </View>

  );
}

