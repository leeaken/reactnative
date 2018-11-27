import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View,
    Image,
    Dimensions
  } from 'react-native';
  
import GridView from 'react-native-super-grid';

const { width } = Dimensions.get('window')
var imageWH=(width-30)/2.0;

const items = [
    { name: '杉杉（FIRS）毛呢大衣', price: '498',"image":"https://img14.360buyimg.com/n2/jfs/t27127/75/904473397/217046/4fb0a5ed/5bbc0738Nebad5fcb.jpg" },
     { name: '夏季女装新品', price: '308',"image":"http://img11.360buyimg.com/n2/jfs/t5212/51/1772684144/68611/659e705c/5913c79fN88c8509f.jpg"},
    { name: '蕾丝镂空长袖衬衣', price: '358',"image":"https://img12.360buyimg.com/n2/jfs/t1/3240/14/762/98424/5b924e2aEc3575dbd/d460824c1c6620aa.jpg"}, 
    { name: '明线纯色半裙女', price: '268',"image":"https://img10.360buyimg.com/n2/jfs/t1/2811/16/711/60136/5b923c93Ec5fa6f66/196ad4982ad4e2a8.jpg"},
    { name: '哈森羊反绒高跟鞋', price: '599',"image":"https://img11.360buyimg.com/cms/jfs/t22879/240/545423616/101986/9520a7f8/5b35a6acN49bf8b7b.jpg"}, 
    { name: '优哈单肩包', price: '198',"image":"https://img30.360buyimg.com/popWaterMark/jfs/t23179/190/2293105347/177306/3dca996b/5b7a80a1Na20ab5e0.jpg" }
  ];
  
export default class HomeProductView extends Component {

  render() {

    return (
        <GridView
            itemDimension={130}
            items={items}
            style={styles.gridView}
            renderItem={item => (
            <View style={styles.itemContainer}>
   
                <Image source={{uri:item.image}}
                style={styles.containner}
                >
                </Image>
                
                <View style={styles.itembg}>
                     <Text style={styles.itemName} numberOfLines={1}>{item.name}</Text>
                     <Text style={styles.itemPrice} numberOfLines={1}>{item.price}</Text>
                </View>
            </View>
            )}
        />
    );
  }
}

const styles = StyleSheet.create({
    containner:{
        flex:1
    },
    gridView: {
        marginTop:10,
        paddingTop: 10,
        flex: 1,
        backgroundColor:"white"
      },
      itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 4,
        padding: 1,
        backgroundColor:"#EFEFEF",
        height: imageWH + 30,
      },
      itemName: {
        fontSize: 13,
        color: '#fff',
        fontWeight: '600',
        width:"78%",
        marginLeft:2,
        // backgroundColor:"green"
      },
      itemPrice:{
        textAlign:"right",
        color: 'yellow',
        width:"20%",
        justifyContent:"flex-end",
        // backgroundColor:"red"
      },
      itembg:{
        width:imageWH,
        height:30,
        flexDirection:"row",
        position: 'absolute',
        backgroundColor:"#000",
        opacity:0.6,
        justifyContent:"flex-start",
        alignItems:"center"
      }
});