import React, { Component } from 'react';
import { View, Text,
 StyleSheet,
 TouchableHighlight,
} from 'react-native';

import {PropTypes} from 'prop-types'
import colors from '../../styles/colors'
import Icon from 'react-native-vector-icons/FontAwesome';

/****
 * 
 * npm install --save react-redux
   npm install --save redux
   npm install --save redux-logger
   npm install --save redux-thunk
 */

export default class NextArrowButton extends Component {

  render() {

    const { disabled, handleNextButton } = this.props;
    const opacityStyle = disabled ? 0.2 : 0.6;
      
    return (
     <TouchableHighlight
        style={[{ opacity: opacityStyle }, styles.button]}
          onPress={handleNextButton}
          disabled={disabled}
     >
          <Icon
            name="angle-right"
            color={colors.green01}
            size={32}
            style={styles.icon}
          />
     </TouchableHighlight>
    );
  }
}

NextArrowButton.propTypes = {
    disabled: PropTypes.bool,
    handleNextButton: PropTypes.func,
  };
  
const styles = StyleSheet.create({
    // buttonWrapper: {
    //   alignItems: 'flex-end',
    //   right: 20,
    //   bottom: 20,
    //   paddingTop: buttonWrapperPadding,
    // },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 50,
      width: 60,
      height: 60,
      backgroundColor: colors.white,
    },
    icon: {
      marginRight: -2,
      marginTop: -2,
    },
  });