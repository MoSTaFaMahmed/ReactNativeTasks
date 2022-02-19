import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View, VirtualizedList, FlatList , TextInput, Button } from 'react-native';
import React, { useState } from "react";
import Todo from './Todo';
import FormTodo from './TodoForm';
const TodoApp = () => {
     const [todos, setTodos] = React.useState([
          {
            text: "React Native Task",
            isDone: false
          }
        ]);
      
        const addTodo = text => {
          const newTodos = [...todos, { text }];
          setTodos(newTodos);
        };
      
        const markTodo = index => {
          const newTodos = [...todos];
          newTodos[index].isDone = true;
          setTodos(newTodos);
        };
      
        const removeTodo = index => {
          const newTodos = [...todos];
          newTodos.splice(index, 1);
          setTodos(newTodos);
        };
     return (  <>
       <View style={styles.container}>
              
              <Text style={{marginTop:10}}>Todo App! </Text>
             <FormTodo addTodo={addTodo}/>
             {todos.map((todo, index) => (
              <Todo
                key={index}
                index={index}
                todo={todo}
                markTodo={markTodo}
                removeTodo={removeTodo}
                />
                ))}
          </View>
     
     
     </>);
}

    // "uuid": "^8.3.2"
const styles = StyleSheet.create({
     container: {
          marginTop:40 ,
          backgroundColor: 'aqua',
          alignItems: 'center',
          justifyContent: 'center',
     },
     
       
    
});
export default TodoApp;