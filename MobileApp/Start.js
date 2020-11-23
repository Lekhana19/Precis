import React, {Component} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  Image,
  ImageBackground,
  Text,
  StyleSheet,
  TextStyle,
  View,
} from 'react-native';

class start extends Component {
  render() {
    const {navigation}=this.props;
    return (
      <SafeAreaView style={{backgroundColor: 'black', flex: 1}}>
          <View style={{flex:0.2,justifyContent:'center'}}>
              <Text style={{
                      fontSize: 30,
                      fontWeight: 'bold',
                      color: 'white',
                      textAlign:'center'
                    }}>
                  Welcome
              </Text>
          </View>
        <View style={{flex:3,justifyContent:'center'}}>
          <TouchableOpacity
          onPress={()=>navigation.navigate("Scan Image")}
            style={{
              alignItems: 'center',
              backgroundColor: '#800000',
              // backgroundColor:'#00203fff',
              borderRadius: 30,
              padding: 10,
              marginTop: 10,
              width:200,
              alignSelf:'center'
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '400',
                color: 'white',
              }}>
              Scan Image
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>navigation.navigate("Enter Text")}
            style={{
              alignItems: 'center',
              backgroundColor: '#800000',
              // backgroundColor:'#00203fff',
              borderRadius: 30,
              padding: 10,
              marginTop: 10,
              width:200,
              alignSelf:'center'
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '400',
                color: 'white',
              }}>
              Enter Text
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
export default start;
