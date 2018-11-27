import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View,
    Image,
    Dimensions,
    ScrollView
  } from 'react-native';
  
import HomeMenuItem from './HomeMenuItem';

const { width } = Dimensions.get('window')
var menuData = require("../../json/HomeMenu.json")
var menuSourceDatas = menuData.data;

export default class HomeMenuView extends Component {
  
  renderScrollViewItem(){

    var array = [];
        
    array.push(
        <HomeMenuItem dataArray={menuSourceDatas} key={0} nav={this.props.nav} >
        </HomeMenuItem>
    );
    
    return array;
   }

  render() {
    // const { navigate } = this.props.navigation;
    return (
        <View style={styles.container}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  alwaysBounceVertical={false}
                  bounces={false}
                  pagingEnabled={true}
                  //onMomentumScrollEnd={this.onScrollAnimationEnd}
                >
                    {this.renderScrollViewItem()}
                </ScrollView>
            </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        width:width,
        backgroundColor:'white'
    },
    colorStyle:{
        width:width,
    }
});