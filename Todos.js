import Checkbox from "expo-checkbox";
import { View,Text,ScrollView, FlatList ,Button} from "react-native";
import { styles } from "./Style";

const Todos = ({list,onTodoDelete,onMark,counter}) => {
  
return (
   <View>
        <Text>Market Tasks {counter}</Text>
        <Text>All Tasks {list.length}</Text>
        <FlatList
   data={list||[]}
   renderItem={({item:todo,index:index})=>(
   <View style={styles.itemContainer}>
              
     <Text style={styles.itemTitle}>
          {todo.title}
     </Text>
   <Checkbox style={styles.itemCheckBox} onChange={()=>onMark(index)} value={todo.done}/>
   <Button
               style={{marginBottom:10}}
                    onPress={()=>onTodoDelete(index)}
                    title="DELETE"
                    color="#000"
                    accessibilityLabel="Learn more about this purple button"
               />
    </View>
         )}
     keyExtractor={(item,index)=>`${index}`}
     ListHeaderComponent={()=><Text style={styles.listHeader}>My Todos</Text>} 
     ListFooterComponent={()=><Text style={{...styles.header,fontSize:20}}>End of list</Text>}
     ItemSeparatorComponent={()=><View style={{borderBottomColor:'black',margin:5,borderBottomWidth:3}}></View>}
  />
   </View>

        
);
}

export default Todos;