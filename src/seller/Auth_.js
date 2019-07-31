import React, { Component } from 'react';
import { View, Text,TextInput,StyleSheet,ScrollView,TouchableWithoutFeedback ,TouchableOpacity } from 'react-native';
import { Colors, AwesomeIcon, Styles } from '../bootstrap';
import { titleCase } from '../functions'
import {IonicIcon} from '../bootstrap';

export default class Auth_ extends Component {

  inputs = ['email','password']

  constructor(props) {
    super(props);
    this.state = {
        activePage:'',
        email:'',
        password:''
    };
  }
  
  updateInputText=(input, text)=>{
    switch (input) {
      case 'email':
        this.setState({email:text})
        break;
      case 'password':
          this.setState({password:text})
        break;
    }
  }

  componentWillMount(){
    this.setState({activePage:this.props.navigation.getParam('page')})
  }

  render() {

    const { navigation } = this.props;
    const { navigate, goBack } = navigation;
    const { activePage,} = this.state;

    return (
      <ScrollView contentContainerStyle={{flexGrow:1}} showsVerticalScrollIndicator={false}>
      <View style={{flex:1}}>
        
         <View style={Styles.header}>
           <TouchableOpacity onPress={()=>goBack()}>
                <View>
                    <IonicIcon name={'arrow-round-back'} size={25} color={Colors.black}/>
                </View>
           </TouchableOpacity>
           <Text style={styles.page_title}>{activePage=='FORGOT'?'RESET PASSWORD':activePage.toUpperCase()}</Text>
           <Text/>
         </View>

           <View style={{flex:90,marginTop:20}}>
                 { activePage=='FORGOT'?
                    <View>
                    <Text style={{textAlign:'center',fontSize:9,marginHorizontal:40,marginBottom:15}}>
                      ENTER THE EMAIL ASSOCIATED WITH YOUR ACCOUNT,WE WILL SEND YOU A LINK TO RESET YOUR PASSWORD
                    </Text>
                    <View style={[styles.input]}>
                      <TextInput  placeholder={'Email'} onChangeText={this.updateInputText} value={''}/>
                    </View>
                   </View>
                   : 
                   this.inputs.map((input,index)=>(
                     <View key={index} style={[styles.input,(activePage=='login' && input=='password'?styles.l_p:null)]}>
                         <TextInput value={this.state.input} placeholder={titleCase(input)} name={input} onChangeText={text=>{this.updateInputText(input,text)}} secureTextEntry={index==1}/>
                         {
                           activePage=='login' && input=='password'?
                           <Text style={{fontSize:9,marginLeft:5,position:"relative"}} onPress={()=>this.setState({activePage:'FORGOT'})}>FORGOT</Text>
                           :
                           null
                         }
                     </View>
                   ))
                 }
                 {
                   activePage=='FORGOT'?
                   null
                   :
                   <Text style={{textAlign:'center',fontSize:10,marginHorizontal:40,marginTop:20,}}>
                   BY PROCEEDING,YOU ACCEPT OUR <Text style={{color:Colors.link}}>TERMS OF SERVICES</Text> AND {'\n'} <Text style={{color:Colors.link}}>PRIVACY POLICIES</Text>
                   </Text>
                 }
            </View> 
            <TouchableWithoutFeedback onPress={()=>alert(this.state.email + this.state.password)}>
              <View style={styles.button}>
                <Text style={{color:Colors.black,fontWeight:'500',marginBottom:25}}>{activePage=='FORGOT'?'RESET PASSWORD':activePage.toUpperCase()}</Text>
              </View>
            </TouchableWithoutFeedback>
      </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  input:{
    marginTop:5,
    fontSize:15,
    marginHorizontal:30,
    borderWidth: 1,
    borderColor:Colors.border_color,
    paddingHorizontal: 5,
  },
  nav:{
    alignItems:'center',
    height:50,
    flexDirection:'row',
    paddingLeft:15,
    borderBottomColor:Colors.black,
    borderBottomWidth:1
  },
  page_title:{
    color:Colors.black,
    fontWeight:'500',
  },
  button:{
    flex:5,
    alignItems:'center',
    justifyContent:'center',
  },
  l_p:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },

});