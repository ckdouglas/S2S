import React, { Component } from 'react';
import { View, Text , StyleSheet,TouchableOpacity,StatusBar,TextInput,ScrollView} from 'react-native';
import {Colors,AwesomeIcon,IonicIcon} from '../bootstrap';
import { Connect,mapDispatchToProps,mapStateToProps } from '../Redux';
import {titleCase} from '../functions'


class PersonalInfor extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const {user, navigation} = this.props;
    const { navigate, goBack} = navigation;
    return (
      <ScrollView contentContainerStyle={{flexGrow:1}}>
      <View style={{flex:1,backgroundColor:Colors.black}}>
        <StatusBar backgroundColor={Colors.black}/>
        <View style={styles.nav}>
        <Text/>
          <Text style={{color:Colors.white}}>PERSONAL INFO</Text>
          <TouchableOpacity onPress={()=>goBack()}>
              <IonicIcon name={'close'} size={25} color={Colors.white}/>
            </TouchableOpacity>
        </View>
        <View style={{flex:1,}}>

          <View style={{height:130,borderBottomColor:Colors.border_color,borderBottomWidth:1}}>
          <Text style={{fontSize:15,textAlign:'center',color:Colors.white,marginTop:20,marginHorizontal:20}}>
            This info is used to verify identity and deposit earnings after your sneakers sell.
            We well never shares it with anyone else.
          </Text>
          </View>
          <View style={{marginHorizontal:30, paddingTop:30}}>
              <TextInput placeholder={'Full Legal Name'} value={ titleCase(user.username)} placeholderTextColor={'gray'} style={{height: 40,color:Colors.white, borderBottomColor: 'gray', borderBottomWidth: 1}}/> 
              <View style={{flexDirection:'row',marginTop:20}}>
              <TextInput placeholder={'Phone Number'} placeholderTextColor={'gray'} style={{height: 40,color:Colors.white,width:'50%',marginRight:2,borderBottomColor: 'gray', borderBottomWidth: 1}}/> 
              <TextInput placeholder={'Birthdate'} placeholderTextColor={'gray'} style={{height: 40,color:'gray',width:'50%',marginLeft:2,borderBottomColor: 'gray', borderBottomWidth: 1}}/> 
              </View>
          </View>
        </View>
        <View style={{height:50,borderTopColor:'gray',borderTopWidth:1,alignItems:'center',justifyContent:'center'}}>
              <Text style={{color:'gray'}}>SUBMIT</Text>
        </View>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

  nav:{
      height:50,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomColor: Colors.border_color,
      borderBottomWidth: 1,
      paddingHorizontal:10
  },
  text:{
      paddingHorizontal:35,
      paddingTop: 30,
      textAlign:'center',
  },
});
export default Connect(mapStateToProps,mapDispatchToProps)(PersonalInfor)
