import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from "react";
const Header = () => {
     const [text, setText] = React.useState("s");
     const textChangFun = (text) => {
          setText(text)
     }
     const onPressLearnMore = () => {
          setText('')
     }
     return (<>
          <View style={styles.container}>
               <Text style={{marginTop:10}}>Hello From Your First App! {text}</Text>
               <StatusBar style="auto" />
               <TextInput
                    style={styles.input}
                    onChangeText={textChangFun}
                    value={text}
               />
               <Button
               style={{marginBottom:10}}
                    onPress={onPressLearnMore}
                    title="Reset"
                    color="#000"
                    accessibilityLabel="Learn more about this purple button"
               />
                    <Text></Text>
          </View>
     </>);
}
const styles = StyleSheet.create({
     container: {
          marginTop:40 ,
          backgroundColor: 'aqua',
          alignItems: 'center',
          justifyContent: 'center',
     },
    
});

export default Header;