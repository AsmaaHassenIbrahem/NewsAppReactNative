import { StyleSheet,  View , Text , FlatList} from "react-native"
import axios from "axios";
import { Strings } from "../utilities/String";
import { useState , useEffect } from "react";
import { Colors } from '../utilities/Color';
import NewsItemScreen from "./NewsItemScreen.js";
import UseAxios from "../hooks/UseAxios";
import SearchBar from 'react-native-material-design-searchbar';

function HomeScreen({navigation}){

  const [search, setSearch] = useState("");
  const {newsData,loading,error} = UseAxios();
  
  function renderDataItem(itemData){
    
    function pressHandler(){
      navigation.navigate(Strings.details, 
        {title: itemData.item.title});
    }
      
    return <NewsItemScreen 
    title={itemData.item.title} 
    image = {itemData.item.urlToImage}
    onPress={pressHandler}/>
  }
  
console.log(search  , newsData.filter(newData => search == "" || newData.title.indexOf(search) > -1).length)
    
    return (
      <View style={styles.container}>
        <SearchBar
        onSearchChange={(text) => setSearch(text)}
        height={50}
        placeholder={'Search...'}
        autoCorrect={false}
        padding={5}
        iconColor={Colors.secondry}
        placeholderColor= {Colors.secondry}
        returnKeyType={'search'}
      />

      <FlatList alwaysBounceVertical={false} data={newsData.filter(newData => search == "" || newData.title.indexOf(search) > -1)} keyExtractor={(item) => item.description}
      renderItem={renderDataItem}/>
      </View>
    );
}

export default HomeScreen

const styles = StyleSheet.create({
   container: {
    flex:1,
    backgroundColor : Colors.background,
    paddingTop:30,
    padding: 20

  }
});