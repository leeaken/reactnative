import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View,
    Image,
    TouchableOpacity,
    AlertIOS
  } from 'react-native';
import PropTypes from 'prop-types';

export default class HomeDrawreButton extends Component {
  
    static propTypes = {

        onPress: PropTypes.func, // 点击事件
     
    };

  render() {

    return (
         <TouchableOpacity onPress={()=>{
             if(this.props.onPress){
                this.props.onPress(this);
             }
         }}>
          <Image style={styles.container} source={require("../../images/drawer.png")} ></Image>
          </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        marginLeft: 10,
        width:28,
        height:28
    }
    
});