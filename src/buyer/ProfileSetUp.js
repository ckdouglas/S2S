import React, { Component } from 'react';
import { View,ScrollView,TouchableOpacity,TouchableWithoutFeedback,StyleSheet,Text,Image,TextInput} from 'react-native';
import { Avatar } from "react-native-elements";
import { Colors, AwesomeIcon, Styles} from '../bootstrap';
import {Connect,mapDispatchToProps,mapStateToProps} from '../Redux';


const inputs = ['Username','Fullname'];

class ProfileSetUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Username:'',
      Fullname:''
    };
  }

  onChangeText=(key,value)=>{
    this.setState({[key]:value});
  }
  
  render() {
    const {navigation, user} = this.props;
    const {navigate, goBack} = navigation; 
    return (
      <ScrollView contentContainerStyle={{flexGrow:1}} showsVerticalScrollIndicator={false}>
        <View style={{flex:1,}}>
            <View style={Styles.header}>
              <TouchableOpacity onPress={()=>goBack()}>
                <View style={{height:30,width:30}}>
                  <AwesomeIcon name={'angle-left'} size={25} color={Colors.black}/> 
                </View>
              </TouchableOpacity>
              <Text style={{fontSize:18,color:Colors.black}}>Setup Profile</Text>
              <Text/>
           </View>
           
           <View style={styles.top_cont}>
              <View style={{width:'30%',alignItems:'center',justifyContent:'center'}}>
                {
                  alert(user) 
                }
               <Avatar rounded size={'large'} source={{ uri:user.photoUrl,}} showEditButton/> 
             </View>
             <View style={{width:'70%'}}>
               <Text style={{fontSize:18}}>Take your photo or upload from the library</Text>
             </View> 
           </View>
           <View style={{flex:30,marginHorizontal:30}}>
             {
               inputs.map((input,index)=>(
                    <TextInput key={index} placeholder={input+'*'} style={Styles.auth_input} onChangeText={value=>this.onChangeText(input,value)}/>
               ))
                  
              }
          <TouchableWithoutFeedback onPress={()=>navigate('PhoneVerification')}>
            <View style={[Styles.primary_button,{marginTop:15}]}>
              <Text style={{color:Colors.white}}>Next</Text>
            </View>
          </TouchableWithoutFeedback>
           </View>
           <View style={{flex:50}}>

           </View>
        </View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  top_cont:{
    marginTop: 10,
    paddingHorizontal: 30,
    flex:10,
    flexDirection:'row',
    alignItems:'center',
    width:'100%',
  },
});
export default Connect(mapStateToProps,mapDispatchToProps)(ProfileSetUp)
