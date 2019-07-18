import React, { Component,TouchableOpacity } from 'react';
import { View, Text } from 'react-native';
import { Styles, AwesomeIcon, Colors } from '../../bootstrap'

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
    <View style={Styles.header}>
      <TouchableOpacity onPress={()=>alert('Wertyui')}>
         <AwesomeIcon name={'angle-left'} size={25} color={Colors.black}/> 
      </TouchableOpacity>
      <Text style={{fontSize:18}}>rtyui</Text>
      <Text/>
    </View>
    );
  }
}
