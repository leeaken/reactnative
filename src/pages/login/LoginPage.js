import React, { Component } from 'react';
import { View, Text,
 StyleSheet,
 ScrollView,
 KeyboardAvoidingView
} from 'react-native';
import {Icon,Header,Container,Left,Content, Body} from 'native-base';
import colors from '../../styles/colors'
import InputField from '../../components/form/InputField';
import NextArrowButton from '../../components/buttons/NextArrowButton'
import Loader from '../../components/Loader';

import {connect} from 'react-redux';
import {doLogin} from '../../redux/actions/LoginAction'


class LoginPage extends Component {
  
  static navigationOptions=  ({ navigation, navigationOptions }) => {
    return {
      title:"登录",
      // headerStyle: transparentHeaderStyle,
      header:null,
      headerTransparent: true,
      headerTintColor: colors.white,
    };
   }
  
   constructor(props){
      super(props);
      this.state = {
        loadingVisible:false
      };
      this.handleNextButton = this.handleNextButton.bind(this);
    }

   handleNextButton(){
    this.setState({loadingVisible:true});
    this.props.dispatch(doLogin());
   }

   shouldComponentUpdate(nextProps, nextState) {
    // 登录完成，且成功登录
    if (nextProps.status === 'done' && nextProps.isSuccess) {
      this.props.navigation.navigate('RootApp');
      return false;
    }
    return true;
  }

   render() {
    const {loadingVisible} = this.state;
    return (        
        <Container>
          <KeyboardAvoidingView style={styles.wrapper}
           behavior="padding"
          >
            <Content contentContainerStyle={styles.scrollViewWrapper}>
                <ScrollView style={styles.scrollView}>
                    <Text style={styles.loginHeader}>Login in</Text>
                    <InputField 
                      textValue="aken"
                      labelText = "EMAIL ADDRESS"
                      labelTextSize = {14}
                      labelColor = {colors.white}
                      textColor = {colors.white}
                      borderBottomColor = {colors.white}
                      inputType = "email"
                      customStyle={{ marginBottom: 30 }}
                    />
                    <InputField 
                      textValue="123456"
                      labelText = "PASSWORD"
                      labelTextSize = {14}
                      labelColor = {colors.white}
                      textColor = {colors.white}
                      borderBottomColor = {colors.white}
                      inputType = "password"
                      customStyle={{ marginBottom: 30 }}
                    />
                </ScrollView>
            </Content>
            <View style = {styles.nextButton}>
                  <NextArrowButton
                    handleNextButton={this.handleNextButton}
                    disabled={false}
                  />
            </View>
            <Loader 
              modalVisible = {loadingVisible}
              animationType = "fade"
            />
          </KeyboardAvoidingView>
       </Container>
    );
  }
}

function select(store)
{
  return {
    status: store.loginIn.status,
    isSuccess: store.loginIn.isSuccess,
    user: store.loginIn.user
  }
}

const styles = StyleSheet.create({
  wrapper:{
    display: 'flex',
    flex:1,
    backgroundColor: colors.green01,
  },
  scrollViewWrapper:{
    marginTop: 70,
    flex:1
  },
  scrollView:{
    paddingLeft:30,
    paddingRight: 30,
    paddingTop: 20,
    flex:1
  },
  loginHeader:{
    fontSize:28,
    color:colors.white,
    fontWeight: '300',
    marginBottom: 30,
  },
  nextButton:{
    alignItems:"flex-end",
    marginRight: 20,
    marginBottom:20
  }
});

export default connect(select)(LoginPage);