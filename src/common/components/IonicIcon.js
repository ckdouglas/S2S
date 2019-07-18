import React, { Component } from 'react';
import {Text, View, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const platform = (Platform.OS =='ios'? 'ios':'md');

class IonicIcon extends Component {

  render() {
      const {name, color, size} = this.props;
    return (
      <View> 
          <Text>
              <Icon name={platform+'-'+name} size={size} color={color}></Icon>
            </Text>
      </View>
    );
  }
}

export default IonicIcon;