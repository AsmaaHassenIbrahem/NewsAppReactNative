import { StyleSheet, View, Text, FlatList } from "react-native";
import axios from "axios";
import { Strings } from "../utilities/String";
import { useState, useEffect } from "react";
import NewsItemScreen from "./NewsItemScreen.js";
import UseAxios from "../hooks/UseAxios";
import SearchBar from "react-native-material-design-searchbar";
import { useAppContext } from "../context/appContext";

function HomeScreen({ navigation }) {
  const { Colors } = useAppContext();

  const [search, setSearch] = useState("");
  const updateSearch = (search) => {
    setSearch(search);
  };

  const { newsData, loading, error } = UseAxios();

  function renderDataItem(itemData) {
    function pressHandler() {
      navigation.navigate(Strings.details, { title: itemData.item.title });
    }

    return (
      <NewsItemScreen
        title={itemData.item.title}
        image={itemData.item.image}
        onPress={pressHandler}
      />
    );
  }

  //console.log(newsData)

  return (
    <View style={[styles.container, { backgroundColor: Colors.background }]}>
      <SearchBar
        onSearchChange={() => console.log("On Search Change")}
        height={50}
        onFocus={() => console.log("On Focus")}
        onBlur={() => console.log("On Blur")}
        placeholder={"Search..."}
        autoCorrect={false}
        padding={5}
        iconColor={Colors.secondry}
        placeholderColor={Colors.secondry}
        returnKeyType={"search"}
      />

      <FlatList
        alwaysBounceVertical={false}
        data={newsData}
        keyExtractor={(item) => item.id}
        renderItem={renderDataItem}
      />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    padding: 20,
  },
});
