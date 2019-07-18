import React, { Component } from 'react';
import { View, Text, StyleSheet,StatusBar,TouchableOpacity,ScrollView,Dimensions,TouchableWithoutFeedback} from 'react-native';
import {colors} from '../../contants/theme';
import Icon from '../../components/Icon';
import Iconn from '../../components/Iconn';

export default class Seller101 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1,backgroundColor:colors.black}}>
      <StatusBar backgroundColor={colors.black}/>
        <View style={styles.nav}>
        <Text/>  
        <Text/>
         <TouchableOpacity>
             <Icon name={'close'} size={25} color={colors.white}/>
        </TouchableOpacity>
        </View>
        <View style={{flex:1}}>
        <View style={{height:'25%'}}>
        </View>
        <View style={{height:'30%',paddingHorizontal:35}}>
            <Text style={{color:colors.white,textAlign:'center'}}>
                Please review the following exaples to avoid listing issues.
                Each listing is checked and by a verification specialist,
                so getting farmilar with our policies will save you time
                and help you get approved quickly.
            </Text>
        </View>
        </View>
        <View style={{alignItems:'center',justifyContent:'center'}}>
            <View style={styles.round_button}>
                <Text/> 
                <Text style={{color:colors.white}}>OK</Text>
                <Iconn name={'angle-down'} color={colors.white} size={25}/>   
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
})