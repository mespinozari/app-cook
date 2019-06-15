import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Image, TextInput, View, Text, Buttom, ScrollView } from 'react-native';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';


const styles = StyleSheet.create({

    image: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        borderRadius: 40,
        borderColor: 'green',
        borderWidth: 1,
        marginTop: 60,
    },
    input: {
        height: 40,
        width: 280,
        marginTop: 10,
        padding: 10,
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'green',
        borderRadius: 20,
    },
    text: {
        color: 'green',
        fontSize: 10,
        marginTop: 20,
        fontSize: 15,

    },
    button: {
        height: 40,
        width: 100,
        marginTop: 50,
        padding: 10,
        fontSize: 16,
        borderWidth: 1,
        backgroundColor: 'green',
        borderRadius: 20,
    },   

    btnsave: {
        height: 20,
        width: 50,
        marginTop: 30,
        padding: 10,
        fontSize: 10,
        borderWidth: 1,
        backgroundColor: 'green',
        borderRadius: 20,
    }
});

export class LandingThree extends Component {
    constructor(props) {
        super(props);
        
    }

    onPressLearnMore() {
        console.log('props', this.props)
        this.props.navigation.navigate('App')
    }

    
    render() {
        return (
            <ScrollView>
              <View style ={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                  <View>
                      <View>
                          <Image style={styles.image} source={require('./../../assets/icon.png')} />
                      </View>
                      <View style= {{ alignItems: 'flex-start'}}>
                          <Text style ={styles.text}>Nombres</Text>
                          <TextInput style={styles.input}></TextInput>
                      </View>
                      <View style= {{ alignItems: 'flex-start'}}>
                          <Text style ={styles.text}>Apellidos</Text>
                          <TextInput style={styles.input}></TextInput>
                      </View>
                      <View style= {{ alignItems: 'flex-start'}}>
                          <Text style ={styles.text}>Correo</Text>
                          <TextInput style={styles.input}></TextInput>
                      </View>
                      <View style= {{ alignItems: 'flex-start'}}>
                          <Text style ={styles.text}>Telefono</Text>
                          <TextInput style={styles.input}></TextInput>
                      </View>
                      <View style= {{ alignItems: 'flex-start'}}>
                          <Text style ={styles.text}>Direccion</Text>
                          <TextInput style={styles.input}></TextInput>
                      </View>
                      <View style = {{ alignItems: 'flex-start'}}>
                        
                     
                      </View>
                  </View>
              </View>
            </ScrollView>
        );
    }
}
