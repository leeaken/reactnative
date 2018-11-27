import React, { Component } from 'react';
import {AppRegistry,
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    Dimensions,
    TouchableOpacity,
    AlertIOS
} from 'react-native';

// 此js使用FlatList
const { width } = Dimensions.get('window')

let imageWH=width/4.0;

const menus = [
    {
        id: 'denglu',
        image: require('../../images/denglu.png'),
    },
    {
        id: 'yonghu',
        image: require('../../images/yonghu.png'),
    },
    {
        id: 'gouwu',
        image: require('../../images/gouwu.png'),
    },
    {
        id: 'time',
        image: require('../../images/time.png'),
    },
    {
        id: 'dashboard',
        image: require('../../images/dashboard.png'),
    },
    {
        id: 'bloc',
        image: require('../../images/bloc.png'),
    },
    {
        id: 'animate',
        image: require('../../images/animate.png'),
    },
    {
        id: 'chart',
        image: require('../../images/chart.png'),
    },
];

export default class HomeMItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataArray: this.props.dataArray,
        };

    }
    // _keyExtractor = (item, index) => item.id;
    onPress(text) {
        // AlertIOS.alert(text);  
        // nav为父类(HomeMenuView)参数
        // this.props.nav("Login")
    }

    componentDidMount(){
        // alert(this.state.dataArray)
    }
    render(){
    
        return(
            <View style={styles.container}>
                <FlatList
                        data={this.state.dataArray}
                        renderItem={this.renderRow.bind(this)}
                        //  keyExtractor={this._keyExtractor}
                         keyExtractor={(item, index) => index.toString()}
                         numColumns ={4}
                         scrollEnabled={false}
                   />   
            </View>
        );
    }
    //cell
    renderRow({ item }){
        
        return(
            <TouchableOpacity activeOpacity={0.5} 
            onPress={this.onPress.bind(this,item.title)}
            id={item.id}
            >
            <View style={styles.contentStyle}>

            {
                menus.map((im, i) => 
                im.id === item.image &&
                 <Image source={im.image} key={i}
                 style={{width:imageWH - 30,height:imageWH - 30}}/>
                )
            } 
             <Text>{item.title}</Text>
             
            </View>
            </TouchableOpacity>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
      },

    contentStyle:{
        width:imageWH,
        height:imageWH,
        justifyContent:'center',
        alignItems:'center' 
    }
});