import React, { Component } from 'react';
import { AppRegistry, View, Text, ScrollView } from 'react-native';

export class LandingOne  extends Component {
  render() {
    return (
      <ScrollView>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Hola landing oNE</Text>
  
        </View>
      </ScrollView>
    );
  }

}