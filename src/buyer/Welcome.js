import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback,StyleSheet} from 'react-native';
import { Colors, Styles,App_Name} from '../bootstrap'


export default class Welcome extends Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    const { navigation } = this.props;
    const { navigate } = navigation;

    return (
      <View style={Styles.container}>
      <View style={{flex:40}}/>
      <View style={[styles.content]}>
        <View>
        <Text style={[Styles.text,{fontSize:40}]}>Welcome to the {App_Name}</Text>
        <Text style={{textAlign:'center',marginTop:20}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nunc sit amet aliquam nisi. Curabitur viverra massa nisi,
            nec faucibus ante suscipit at. Praesent id ultrices leo. 
        </Text>
        </View>
        <View style={{width:'100%',}}>
        <View style={Styles.primary_button}>
          <TouchableWithoutFeedback onPress={()=>navigate('Sign_Up')}>
              <Text style={{color:Colors.white,fontSize:16}}>Create Account</Text>
          </TouchableWithoutFeedback>
        </View>
        <Text style={{marginTop:20,textAlign:'center'}}>
          Already have an account?  
          <Text style={{fontWeight:'500',color:Colors.black}} onPress={()=>navigate('Login')}> Login </Text>
        </Text>
        </View>
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  content:{
    flex:60,
    alignItems:'center',
    justifyContent:'space-around',
    marginHorizontal:30,
    marginBottom: 10,
  },
});