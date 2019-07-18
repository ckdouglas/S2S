import React, { Component } from 'react';
import { Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class AwesomeIcon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {name, color, size} = this.props;
    return (
      <Text> <Icon name = {name} color={color} size={size}/> </Text> 
    );
  }
}
