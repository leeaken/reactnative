import React, { Component } from 'react';
import { View, Text,StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  AlertIOS
 } from 'react-native';

import {Icon,Header,Container,Left,Content} from 'native-base';

import BasePage from '../base/BasePage';
import HomeBanner from './HomeBanner';
import HomeMenuView from './HomeMenu';
import HomeProductView from './HomeProduct';
import HomeDrawreButton from "./HomeDrawreButton";


let that ;
export default class HomePage extends BasePage {
 

  constructor(props){
    super(props);
    that = this;
    this.state = {
      crurentNavigate:this.props.navigation
    };
    
  } 

  static navigationOptions=  ({ navigation, navigationOptions }) => {
    return {
      title:"首页",
      headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10,color:"white"}} onPress={()=> navigation.openDrawer()} />
    };
   }

  render() {
    const { navigate } = this.props.navigation;
    return (
       <Container>
        <Content>
          <ScrollView>
            <HomeBanner></HomeBanner>
            <HomeMenuView nav={navigate}></HomeMenuView>
            <HomeProductView></HomeProductView>
          </ScrollView>
        </Content>
       </Container>
    );
  }
}

const styles = StyleSheet.create({
    containner:{
      flex:1
    },
    icon: {
      width: 30,
      height: 30,
    },
    drawerIconSize:{

    }
});