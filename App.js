/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,
  Image,
  Dimensions,
  YellowBox
} from 'react-native';

import {Icon,Header,Container,Left,Content,Body} from 'native-base';
import { createStackNavigator,createDrawerNavigator,DrawerItems,SwitchNavigator} from 'react-navigation';
import {Provider} from 'react-redux';

// 自定义
import HomePage from './src/pages/home/HomePage';
import LoginPage from './src/pages/login/LoginPage';
import SettingPage from './src/pages/setting/SettingPage';
import HomeDrawreButton from "./src/pages/home/HomeDrawreButton";
import configureStore from './src/redux/store/ConfigureStore';
import DrawerContentComponent from './src/pages/home/DrawerContentComponent';
// 去掉过期警告
YellowBox.ignoreWarnings(['ListView is deprecated']);

const store = configureStore();

const commonNavOptions = {
  headerStyle:{
    backgroundColor: '#FFBF43',
  },
  headerTintColor:"#fff",
  headerStyleStyle:{
    fontWeight: 'blsold',
  },
  headerBackTitle: null
}
const RootStack = createStackNavigator({
  Home:{ screen:HomePage},
  Login:{screen:LoginPage}
},{
  initialRouteName: "Home",
  navigationOptions:commonNavOptions
});

const SettingStack = createStackNavigator({
  Setting:{screen:SettingPage}
},{
  initialRouteName: "Setting",
  navigationOptions:commonNavOptions
});

const DrawerStack = createDrawerNavigator({
    Home: {
      screen: RootStack,
      navigationOptions: {
        drawerLabel: '首页',
        drawerIcon: (): any =>   
        <Icon name="ios-home" />
      },
      
    },
    Setting:{
      screen:SettingStack,
      navigationOptions: {
        drawerLabel: '设置',
        drawerIcon: (): any =>   
        <Icon name="ios-settings" />
      }
    }
    
  },{
    initialRouteName: 'Home',
    drawerPosition: 'left',
    contentComponent:DrawerContentComponent,
    contentOptions: {
      activeTintColor: '#FFBF43'
    },
    
  }
);

const SwitchStack =  SwitchNavigator(
  {
      Start: LoginPage,
      RootApp: DrawerStack,
  },
  {
      initialRouteName: 'Start',
  }
);

export default class App extends Component {

  render() {

     return (
       <Provider store={store}>
         <SwitchStack />
       </Provider>
     );
  }
}
