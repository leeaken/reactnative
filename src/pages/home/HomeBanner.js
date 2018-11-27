import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,
  Image,
  Dimensions
} from 'react-native';

import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window')
const loading = require('../../images/loading.gif')


const Slide = props => {
    return (<View style={styles.slide}>
      <Image onLoad={props.loadHandle.bind(null, props.i)} style={styles.image} source={{uri: props.uri}} />
      {
        !props.loaded && <View style={styles.loadingView}>
          <Image style={styles.loadingImage} source={loading} />
        </View>
      }
    </View>)
  }

  
export default class HomeBanner extends Component {

constructor (props) {
        super(props)
        this.state = {
            imgList: [
            'https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D500/sign=e771a7cdc38065387feaa413a7dca115/f2deb48f8c5494ee847d2d9a24f5e0fe98257ed1.jpg',
            'https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D500/sign=c2dad3789c529822013339c3e7cb7b3b/cb8065380cd7912313247bcba1345982b3b7804d.jpg',
            'https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D500/sign=586fdf94084f78f0840b9af349300a83/6f061d950a7b0208d8767e2169d9f2d3562cc8b7.jpg',
            'https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D500/sign=456f94f81fce36d3a60483300af23a24/2e2eb9389b504fc2cbb8d827efdde71190ef6d28.jpg',
            "https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/h%3D250/sign=da8946e7898ba61ec0eecf2a713597cc/43a7d933c895d143c6f7a40e78f082025aaf071d.jpg"
            ],
            loadQueue: [0, 0, 0, 0]
        }
        this.loadHandle = this.loadHandle.bind(this)
        }
        loadHandle (i) {
        let loadQueue = this.state.loadQueue
        loadQueue[i] = 1
        this.setState({
            loadQueue
        })
  }
  render() {
    return (
      
    <View style={styles.containner}>
        <Swiper loadMinimal loadMinimalSize={1} style={styles.wrapper} loop={true} autoplay={true}
        height={300} paginationStyle={{bottom:0, left: 0, right: 0}}
        >
          {
            this.state.imgList.map((item, i) => <Slide
              loadHandle={this.loadHandle}
              loaded={!!this.state.loadQueue[i]}
              uri={item}
              i={i}
              key={i} />)
          }
        </Swiper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    containner:{
        width:width,
        height:200
    },
    wrapper: {
        backgroundColor: '#EFEFEF'
    },
  
    slide: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'transparent'
    },
    image: {
      width,
      flex: 1,
      backgroundColor: 'transparent'
    },
  
    loadingView: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,.5)'
    },
  
    loadingImage: {
      width: 60,
      height: 60
    }
  })