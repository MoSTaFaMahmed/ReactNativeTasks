import { StyleSheet } from "react-native";
export const styles=StyleSheet.create({
title:{
     backgroundColor:'aqua',
     color:'white',
     textAlign:"center",
     fontWeight:'bold',
     padding:15
},
addToDoContainer:{
display:'flex',
flexDirection:'row',
justifyContent:'space-between',
},
input:{
     fontSize:20,
     borderBottomWidth:1,
     padding:0
},
btn:{
     color:'white',
     backgroundColor:'aqua',
     textAlign:'center',
     fontSize:20,
     alignSelf:'center'

},
inputFocus:{
flexGrow:1,
marginRight:5,

},
listHeader: {
     textAlign: "center",
     fontSize: 22, 
     fontWeight:'bold'
   },
   itemContainer: {
     display: "flex",
     flexDirection: "row",
     justifyContent: "space-between",
     padding: 5,
   },
   itemTitle: {
     fontSize: 18,
   },
   itemCheckBox: {
     marginRight: 10,
   },
});