import { StyleSheet, Text, Button, View, Image } from 'react-native';
import React, { useState } from "react";
const Slider = () => {
     const [index, setIndex] = React.useState(0)
     const images = [
          'https://cdn.pixabay.com/photo/2016/03/27/19/44/car-1283947_960_720.jpg',
          'https://cdn.pixabay.com/photo/2018/01/18/20/56/auto-3091234__340.jpg',
          'https://cdn.pixabay.com/photo/2014/07/31/00/30/vw-beetle-405876_960_720.jpg'

     ]
     const next = () => {
          if (index != images.length - 1) {
               setIndex(index + 1)
          }
          else {
               setIndex(images.length - 1)
          }
     }
     const prev = () => {
          if (index > 0) {
               setIndex(index - 1)
          }
     }
     return (<>
          <View style={{
               alignItems: 'center',
               justifyContent: 'center',
          }}>
               <Image style={styles.container}
                    source={{ uri: `${images[index]}` }}
               />
               <View style={{ flexDirection: 'row' }}>

                    <Button

                         onPress={next}
                         title="Next"
                         color="#841584"
                         accessibilityLabel="Learn more about this purple button"
                    />

                    <Button
                         onPress={prev}
                         title="Prev"
                         color="#841584"
                         accessibilityLabel="Learn more about this purple button"
                    />
               </View>
          </View>
     </>);
}

export default Slider;
const styles = StyleSheet.create({
     container: {
          width: '100%', height: 200
     },
});