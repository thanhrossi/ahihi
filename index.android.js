// import lib
import React from "react";
import { AppRegistry, View } from "react-native";
import Header from "./src/components/header";
import AlbumList from "./src/components/AlbumList";

// components

const App = () => {
  return (

<View style= {{flex: 1, paddingBottom: 40}}>
  <Header headerText={'Đây là cái gì đấy'}/>  
  <AlbumList/>
</View>

  );
  
};

// render it to device
AppRegistry.registerComponent('ahihi', () => App);
