import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,
  Image
} from 'react-native';

import {DrawerItems} from 'react-navigation';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import {Icon,Header,Container,Left,Content,Body} from 'native-base';
import PropTypes from 'prop-types';

/**
 * 自定义头部相关信息
 *
 * @export
 * @class DrawerContentComponent
 * @extends {Component}
 */
export default class DrawerContentComponent extends Component {

  render () {
    return (
        <Container>
        <Header style={styles.drawerHeader}>
          <Body>
            <Image
              style={styles.drawerImage}
              source={require('../../../src/images/denglu.png')} />
            <Text>aken</Text>
          </Body>
        </Header>
        <Content>
          <DrawerItems {...this.props} />
        </Content>
    
          <View style={styles.drawerBottom}>
            <FontIcon name="power-off"  
            size={28}
            onPress={()=> this.props.navigation.navigate('Start')} />
          </View>
      </Container>
    );
  }
}

  const styles = StyleSheet.create({

    drawerHeader: {
      height: 200,
      backgroundColor: '#FFBF43'
    },
    drawerImage: {
      height: 150,
      width: 150,
      borderRadius: 75
    },
    drawerBottom: {
      height:30,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFBF43'
    },
  })
