import React, { Component } from 'react';
import { View, Text, StyleSheet,TextInput,TouchableWithoutFeedback,TouchableOpacity,ScrollView } from 'react-native';
import {AwesomeIcon, Colors, Styles} from '../bootstrap';


export default class PhoneVerification extends Component { 
  constructor(props) {
    super(props);
    this.state = {
    };
  }
 
  render() {
    const {navigate,goBack} = this.props.navigation;
    return (
      <View style={Styles.container}>
           <View style={Styles.header}>
            <TouchableOpacity onPress={()=>goBack()}>
              <View style={{height:30,width:30}}>
                <AwesomeIcon name={'angle-left'} size={25} color={Colors.black}/> 
              </View>
            </TouchableOpacity>
            <Text style={{fontSize:18,color:Colors.black}} style={{color:Colors.black,fontWeight:'500',fontSize:18}}>
                Phone Verification
                </Text>
            <Text/>
          </View>
          <ScrollView>
          <View style={styles.content}>
              <Text style={styles.text}>Please enter 6 digit code sent to your phone number +60XXXXXXXXXXX</Text>
              <TextInput placeholder={'Code'} style={Styles.auth_input}/>
              <TouchableWithoutFeedback>
                <View style={[Styles.primary_button,{marginTop:20}]}>
                <Text style={{color:Colors.white,fontSize:15,fontWeight:'500'}}>Submit</Text>
                </View>
             </TouchableWithoutFeedback>
          </View>
          </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({

    content:{
     flex:1,
     paddingHorizontal:30,
    },
    text:{
        paddingHorizontal:35,
        paddingTop: 30,
        textAlign:'center',
    },
});