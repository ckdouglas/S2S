import React, { Component } from 'react';
import {
   View, Text, StyleSheet,TextInput,TouchableWithoutFeedback,TouchableOpacity
  } from 'react-native';

import {AwesomeIcon ,Colors,Styles} from '../bootstrap';

const inputs = ['Email','New Password','Confirm Password'];
const pages=['Forgot','Reset'];
const text =['To reset yor password,we need your email associated with your account',
             'Please insert your new password'];
 
export default class PasswordReset extends Component {
  constructor(props) {
    super(props);
    this.state = {
        activePage:pages[0],
        Email:'',
        Password:'',
    };
  }



  onChangeText = (key, value)=>{
    this.setState({[key]:value});
  }

  render() {
      const {activePage,Email, Password} = this.state;
      const { navigate, goBack, } = this.props.navigation;

    return (
      <View style={[Styles.container,]}>

        <View style={Styles.header}>
          <TouchableOpacity onPress={()=>goBack()}>
             <View style={{height:30,width:30}}>
                <AwesomeIcon name={'angle-left'} size={25} color={Colors.black}/> 
              </View>
          </TouchableOpacity>
         <Text style={{fontSize:18,color:Colors.black}}>{activePage}</Text>
        <Text/>
        </View>
         
        <View style={{flex:95,paddingHorizontal:30}}>
          <Text style={{textAlign:'center',paddingHorizontal:40,marginTop:30}}>{activePage== pages[0]? text[0]:text[1]}</Text>
          {
                    inputs.map((input,index)=>{
                        if (activePage==pages[0] && index<1 || activePage==pages[1] && index) {
                          return(
                            <TextInput key={index} placeholder={input+'*'} secureTextEntry={index>0?true:false} onChangeText={value=>this.onChangeText(input==inputs[0]?input:'Password',value)} style={Styles.auth_input}/>
                          )
                        }
                    })
          }
        <TouchableWithoutFeedback onPress={()=>activePage==pages[0]?this.setState({activePage:pages[1]}):alert('Email Reset Successful '+ Password)}>
            <View style={[Styles.primary_button,{marginTop:15}]}>
              <Text style={{color:Colors.white,fontSize:15,fontWeight:'500'}}>Reset Password</Text>
            </View>
        </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
}