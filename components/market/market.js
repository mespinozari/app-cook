import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, TextInput } from 'react-native';

export default class FlexDimensionsBasics extends Component {
    render() {
      return (
       
        <View style={{flex: 1}}>
          <View style={{flex: 1,height: 5, backgroundColor: 'powderblue'}} />
          <View style={{flex: 8, backgroundColor: ''}} />
          <View style={{flex: 1,height: 5, backgroundColor: 'powderblue'}} />
        </View>
      );
    }
  
  }

