import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Icon,Header,Container,Left,Content, Body} from 'native-base';

export default class LoginPage extends Component {
  
  static navigationOptions=  ({ navigation, navigationOptions }) => {
    return {
      title:"设置",
      headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10,color:"white"}} onPress={()=> navigation.openDrawer()} />
    };
   }
  
  render() {
    return (
      <Container>
       <Content contentContainerStyle={{flex:1,alignItems:"center",justifyContent:"center"}}>
            <Text>设置</Text>
        </Content>
       </Container>
    );
  }
}
