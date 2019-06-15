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

  box_detail: {
    height: 40,
    width: 140,
    backgroundColor: '#CEF6E3',
    justifyContent: 'center',
    borderRadius: 25,
    marginTop: -50,
    marginLeft: 15,
    
  },

  title: {
    color: 'green',
    justifyContent: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    flex: 1,
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
  },

  image: {
    width: 140,
    height: 100,
    justifyContent: 'center',
    borderRadius: 25,
    marginTop: -153,
    marginLeft: 15,
  },  

  text_info: {

    fontSize: 12,
    fontWeight: 'bold',
    justifyContent: 'center',
    color: 'black',
    marginLeft: 60,
    marginTop: -25,

  }

})



export class LandingTwo  extends Component {
  render() {
    return (
      <ScrollView>
        <View style={{flex: 1, justifyContent: 'center', padding: 10}}>
          <View style={{paddingLeft: 10, paddingRight: 10}}>
            <TextInput style={style.input} placeholder="Platos"></TextInput>
          </View>
          
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
            <View>
              <View>
                <View style={style.box}></View>
                 <View>
                   <View>
                     <View style={style.box_detail}></View>
                     <View>
                     <Text style={ style.text_info}>s/ 75.00</Text>
                   </View>
                   </View>
                   <View>
                     <Image style={style.image} source={require('./../../assets/ceciche.png')}></Image>
                   </View>
                </View>
              </View>
            </View>
            <View>
              <View>
                <View style={style.box}></View>
                 <View>
                   <View>
                     <View style={style.box_detail}></View>
                     <View>
                     <Text style={ style.text_info}>s/ 75.00</Text>
                   </View>
                   </View>
                   <View>
                     <Image style={style.image} source={require('./../../assets/ceciche.png')}></Image>
                   </View>
                </View>
              </View>
            </View>
          </View>

          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
            <View>
              <View>
                <View style={style.box}></View>
                 <View>
                   <View>
                     <View style={style.box_detail}></View>
                     <View>
                     <Text style={ style.text_info}>s/ 75.00</Text>
                   </View>
                   </View>
                   <View>
                     <Image style={style.image} source={require('./../../assets/ceciche.png')}></Image>
                   </View>
                </View>
              </View>
            </View>
            <View>
              <View>
                <View style={style.box}></View>
                 <View>
                   <View>
                     <View style={style.box_detail}></View>
                     <View>
                     <Text style={ style.text_info}>s/ 75.00</Text>
                   </View>
                   </View>
                   <View>
                     <Image style={style.image} source={require('./../../assets/ceciche.png')}></Image>
                   </View>
                </View>
              </View>
            </View>
          </View>

          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
            <View>
              <View>
                <View style={style.box}></View>
                 <View>
                   <View>
                     <View style={style.box_detail}></View>
                     <View>
                     <Text style={ style.text_info}>s/ 75.00</Text>
                   </View>
                   </View>
                   <View>
                     <Image style={style.image} source={require('./../../assets/ceciche.png')}></Image>
                   </View>
                </View>
              </View>
            </View>
            <View>
              <View>
                <View style={style.box}></View>
                 <View>
                   <View>
                     <View style={style.box_detail}></View>
                     <View>
                     <Text style={ style.text_info}>s/ 75.00</Text>
                   </View>
                   </View>
                   <View>
                     <Image style={style.image} source={require('./../../assets/ceciche.png')}></Image>
                   </View>
                </View>
              </View>
            </View>
          </View>

          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
            <View>
              <View>
                <View style={style.box}></View>
                 <View>
                   <View>
                     <View style={style.box_detail}></View>
                     <View>
                     <Text style={ style.text_info}>s/ 75.00</Text>
                   </View>
                   </View>
                   <View>
                     <Image style={style.image} source={require('./../../assets/ceciche.png')}></Image>
                   </View>
                </View>
              </View>
            </View>
            <View>
              <View>
                <View style={style.box}></View>
                 <View>
                   <View>
                     <View style={style.box_detail}></View>
                     <View>
                     <Text style={ style.text_info}>s/ 75.00</Text>
                   </View>
                   </View>
                   <View>
                     <Image style={style.image} source={require('./../../assets/ceciche.png')}></Image>
                   </View>
                </View>
              </View>
            </View>
          </View>

          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
            <View>
              <View>
                <View style={style.box}></View>
                 <View>
                   <View>
                     <View style={style.box_detail}></View>
                     <View>
                     <Text style={ style.text_info}>s/ 75.00</Text>
                   </View>
                   </View>
                   <View>
                     <Image style={style.image} source={require('./../../assets/ceciche.png')}></Image>
                   </View>
                </View>
              </View>
            </View>
            <View>
              <View>
                <View style={style.box}></View>
                 <View>
                   <View>
                     <View style={style.box_detail}></View>
                     <View>
                     <Text style={ style.text_info}>s/ 75.00</Text>
                   </View>
                   </View>
                   <View>
                     <Image style={style.image} source={require('./../../assets/ceciche.png')}></Image>
                   </View>
                </View>
              </View>
            </View>
          </View>

          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
            <View>
              <View>
                <View style={style.box}></View>
                 <View>
                   <View>
                     <View style={style.box_detail}></View>
                     <View>
                     <Text style={ style.text_info}>s/ 75.00</Text>
                   </View>
                   </View>
                   <View>
                     <Image style={style.image} source={require('./../../assets/ceciche.png')}></Image>
                   </View>
                </View>
              </View>
            </View>
            <View>
              <View>
                <View style={style.box}></View>
                 <View>
                   <View>
                     <View style={style.box_detail}></View>
                     <View>
                     <Text style={ style.text_info}>s/ 75.00</Text>
                   </View>
                   </View>
                   <View>
                     <Image style={style.image} source={require('./../../assets/ceciche.png')}></Image>
                   </View>
                </View>
              </View>
            </View>
          </View>
          
        </View>
      </ScrollView>
    );
  }

}