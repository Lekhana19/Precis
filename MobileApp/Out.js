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
  TextInput,
  Platform,
} from 'react-native';

class out extends Component{
    render(){
        return(
            <SafeAreaView style={{flex:1}}>
                <View style={{flex:1,justifyContent:'center'}}>
                    <ImageBackground source={require('../img/bg1.jpg')}
                    style={{flex:1,justifyContent:'center'}}>
                    <Text
                     style={{
                        fontSize:20,
                        borderWidth:1,
                        alignSelf:'center',
                        padding:20,
                        color:'white'
                    }}>
                        Hii there
                    </Text>
                    </ImageBackground>
                </View>
            </SafeAreaView>
        )
    }
}
export default out;