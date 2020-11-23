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

class text extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textIN: '',
    };
  }

  handletextIN = (text) => {
    this.setState({textIN: text});
  };
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Text style={{alignSelf: 'center', fontSize: 45, fontWeight: 'bold'}}>
          Text Summary
        </Text>
        <View
          style={{flex: 0.2, backgroundColor: 'skyblue', padding: 10}}></View>
        <View style={{backgroundColor: 'white', flex: 1, marginTop: 20}}>
          <TextInput
          onChangeText={this.handletextIN}
            placeholder={'Enter the Text'}
            placeholderTextColor={'black'}
            automaticallyAdjustContentInsets={true}
            style={{fontSize: 30, padding: 10,borderWidth:2}}
            multiline={true}>

            </TextInput>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            flex: 0.2,
            flexDirection: 'row',
            padding: 10,
            height: 40,
            borderWidth:2,
            justifyContent:'center'
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'purple',
              height: 50,
              justifyContent: 'center',
              width: 110,
              borderRadius:25
            }}>
            <Text style={{fontSize: 20, textAlign: 'center',color:'white'}}>Summary</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
            style={{
              backgroundColor: 'purple',
              height: 50,
              justifyContent: 'center',
              marginLeft: 60,
              width: 150,
            }}>
            <Text style={{fontSize: 20, textAlign: 'center'}}>
              Extensive Summary
            </Text>
          </TouchableOpacity> */}
        </View>
        {/* <View style={{flex:0.1,backgroundColor:'black',}}>

        </View> */}
        <View style={{backgroundColor: 'skyblue', flex: 1,padding:10}}>
            <Text style={{fontSize:20,borderWidth:2}}>
                Just enter state of API here
            </Text>

        </View>
      </SafeAreaView>
    );
  }
}
export default text;
