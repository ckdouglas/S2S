import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Styles, Colors, AwesomeIcon, IonicIcon} from '../bootstrap'

export default class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage:'login',
      inputs:[{lable:'email',value:''},{lable:'password',value:''}]
    };
  }

  render() {

    const { navigation } = this.props;
    const { navigate, goBack} = navigation;
    const { inputs, activePage } = this.state;

    return (
      <View style={Styles.container}>

        <View style={Styles.header}>
          <Text/>
          <Text style={[Styles.text,]}>{activePage.toUpperCase()}</Text>
          <TouchableOpacity>
            <IonicIcon name={'close'} size={25}/>
          </TouchableOpacity>
        </View>

        <View style={Styles.container}>

        </View>
      </View>
    );
  }
}
