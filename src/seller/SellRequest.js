import React from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { Transition, FluidNavigator } from 'react-navigation-fluid-transitions';
import { Colors, AwesomeIcon } from '../bootstrap';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  top1: {
    backgroundColor: '#C14534',
    flex: 1,
  },

  nav:{
    height:50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal:10,
},

round_button:{
    height:100,
    width:100,
    borderColor: 'gray',
    borderRadius: 50, 
    borderWidth: 1,
    alignItems:'center',
    justifyContent:'space-around'
}
});

class SellRequest extends React.Component {
  render() {
    return (
      <View style={{flex:1,backgroundColor:Colors.black}}>
      <StatusBar backgroundColor={Colors.black}/> 
        <View style={{flex:1}}>
        <View style={{height:'25%'}}>
        </View>
        <View style={{height:'30%',paddingHorizontal:35,alignItems:'center'}}>
            <Text style={{color:Colors.white,fontSize:18}}>REQUEST TO SELL</Text>
            <Text style={{color:Colors.white,textAlign:'center'}}>
                Request to sell recieved we will notify you via ur email after reviewing your application.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standarddummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Text>
        </View>
        </View>
      </View>
    );
  }
}

export default SellRequest;