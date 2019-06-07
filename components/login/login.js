import React, { Component } from 'react';
import { View, StyleSheet, Image, TextInput, Text, Button } from 'react-native';

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        borderRadius: 50,
        borderColor: 'green',
        borderWidth: 1,
    },
    input: {
        height: 40,
        width: 200,
        marginTop: 30,
        padding: 10,
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'green',
        borderRadius: 20,
    },
    text: {
        color: 'green',
        fontSize: 12,
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
    }
});

export class Login extends Component {
    constructor(props) {
        super(props);
        
    }

    onPressLearnMore() {
        console.log('props', this.props)
        console.log('si uso mac!!')
        this.props.navigation.navigate('App')
    }

    render() {
        return (

            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',

            }}>
                <Image style={styles.image} source={require('./../../assets/icon.png')} />
                <Text style={styles.text}>
                    Login
                </Text>
                <TextInput style={styles.input}
                    placeholder="Username"

                />
                <Text style={styles.text}>
                    Password
                </Text>
                <TextInput style={styles.input}
                    placeholder="Password"

                    secureTextEntry={true}
                />
                <Button style={{ borderRadius: '310' }}
                    onPress={this.onPressLearnMore.bind(this)}
                    title="Send"
                    color="green"
                />
            </View>
        )
    }
}