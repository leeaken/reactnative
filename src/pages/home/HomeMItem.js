import React, { Component } from 'react';
import {AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    Dimensions,
    TouchableOpacity,
    AlertIOS
} from 'react-native';

const { width } = Dimensions.get('window')

let imageWH=width/4.0;

const items = [
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

export default class HomeMenuItem extends Component {

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataArray: ds.cloneWithRows(this.props.dataArray),
        };

    }

    onPress(text) {
        // AlertIOS.alert(text);  
        // nav为父类(HomeMenuView)参数
        this.props.nav("Login")

      }

    render(){
        // 
        return(
            <View>
                <ListView
                    dataSource={this.state.dataArray}
                    renderRow={this.renderRow.bind(this)}
                    contentContainerStyle={styles.contentStyle}
                    scrollEnabled={false}//设置ListView不滑动
                />
            </View>
        )
    }
    //cell
    renderRow(rowData){
        
        return(
            <TouchableOpacity activeOpacity={0.8} onPress={this.onPress.bind(this,rowData.title)}>
            <View style={{width:imageWH,height:imageWH,justifyContent:'center',alignItems:'center'}}>
            
            {
                items.map((item, i) => 
                item.id === rowData.image &&
                 <Image source={item.image} key={i}
                 style={{width:imageWH - 30,height:imageWH - 30}}/>
                )
            } 
             <Text>{rowData.title}</Text>
             
            </View>
            </TouchableOpacity>
        )
    }

}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    // 要使ListView换行,要设置ListView宽度
    contentStyle:{
        flexDirection:'row',
        flexWrap:'wrap',
        width:width
    }
});