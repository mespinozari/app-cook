import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Image, TextInput, View, Text, Buttom, ScrollView } from 'react-native';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

const style = StyleSheet.create ({
  input: {
    height: 40,
    marginTop: 50,
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  
  },

  box : {
    height: 160,
    width: 160,
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 15,
    marginTop: 15,
    marginLeft: 5,
    marginRight: 5,
  },

  box_little: {
    height: 160,
    width: 80,
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 15,
    marginTop: 15,
    marginLeft: 5,
    marginRight: 5,
  },

  title: {
    color: 'green',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
  },

  title_info: {
    color: 'gray',
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
  },
})


export class LandingOne  extends Component {
  render() {
    return (
      <ScrollView>
        <View style={{flex: 1, justifyContent: 'center', padding: 10}}>
          <View style={{paddingLeft: 10, paddingRight: 10}}>
            <TextInput style={style.input} placeholder="Tienda"></TextInput>
          </View>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
            <View style={style.box}></View>
            <View style={style.box}></View>
          </View>
          <View style={{ flex: 1, flexDirection: 'row', marginBottom: 10, justifyContent: 'space-between'}}>
            <View>
              <Text style={style.title}>Populares</Text>
            </View>
            <View>
              <Text style={style.title}>Paquetes</Text>
            </View>
          </View>
          
          <View style={{ flex: 0.5, flexDirection: 'row', flexWrap: 'wrap'}}>
            <View style={{justifyContent: 'center', marginLeft: 5}}>
              <View style={style.box_little}></View>
            </View>
            <View style={{paddingTop: 20}}>
                <Text style={style.title}>Carapulcra</Text>
                <View>
                  <Text style={{flexWrap:'wrap'}}>Exquisito plato típico del Perú y esta considerado como uno de los más antiguos y proviene de la sierra peruana.</Text>
                </View> 
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: 'row', marginLeft: 5}}>
            <View style={{justifyContent: 'center'}}>
              <View style={style.box_little}></View>
            </View>
            <View style={{paddingTop: 20,justifyContent: 'center'}}>
              <Text style={style.title}>Lomo Saltado</Text>
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: 'row', marginLeft: 5}}>
            <View style={{justifyContent: 'center'}}>
              <View style={style.box_little}></View>
            </View>
            <View style={{paddingTop: 20,justifyContent: 'center'}}>
              <Text style={style.title}>Tallarines al Pesto</Text>
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: 'row', marginLeft: 5}}>
            <View style={{justifyContent: 'center'}}>
              <View style={style.box_little}></View>
            </View>
            <View style={{paddingTop: 20,justifyContent: 'center'}}>
              <Text style={style.title}>Pollo al Jugo</Text>
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: 'row', marginLeft: 5}}>
            <View style={{justifyContent: 'center'}}>
              <View style={style.box_little}></View>
            </View>
            <View style={{paddingTop: 20,justifyContent: 'center'}}>
              <Text style={style.title}>Escabeche de Pollo</Text>
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: 'row', marginLeft: 5}}>
            <View style={{justifyContent: 'center'}}>
              <View style={style.box_little}></View>
            </View>
            <View style={{paddingTop: 20,justifyContent: 'center'}}>
              <Text style={style.title}>Picarones</Text>
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: 'row', marginLeft: 5}}>
            <View style={{justifyContent: 'center'}}>
              <View style={style.box_little}></View>
            </View>
            <View style={{paddingTop: 20,justifyContent: 'center'}}>
              <Text style={style.title}>Flan de Lucuma</Text>
            </View>
          </View>
          
        </View>
      </ScrollView>
    );
  }

}