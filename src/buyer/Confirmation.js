import React, { Component } from 'react';
import { View, Text,StyleSheet,TouchableOpacity,ScrollView,TouchableWithoutFeedback} from 'react-native';
import { Avatar } from 'react-native-elements';
import { AwesomeIcon, Colors, Styles } from '../bootstrap'; 

Avatarr  = (props)=>{ 
    return (
            <Avatar title={props.title} rounded size='large' containerStyle={{marginHorizontal:5}} titleStyle={{fontSize:18,color:props.color}}  overlayContainerStyle={{backgroundColor:'#000'}}/>
    )
}

export default class Confirmation extends Component {
  constructor(props) {
    super(props);
    this.state = { gender:'Male', brand:'Adidas', size:7, country:'US' };
  }

  render() {
      const { gender,brand,size, country } = this.state;
      const {navigate,goBack} = this.props.navigation;

    return (
      <View style={{flex:1}}>
      
          <View style={Styles.header}>
            <TouchableOpacity onPress={()=>goBack()}>
              <View style={{height:30,width:30}}>
                <AwesomeIcon name={'angle-left'} size={25} color={Colors.black}/> 
              </View>
            </TouchableOpacity>
            <Text style={{fontSize:18,color:Colors.black}} style={{color:Colors.black,fontWeight:'500',fontSize:18}}>
                 Confirmation
                </Text>
            <Text/>
          </View>
          <View style={{flex:1}}>
          <Text style={[styles.text,{marginBottom:10}]}>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</Text>
          <View style={styles.content}>
                <View style={{alignItems:'center'}}>
                     <Avatarr/> 
                     <Text style={{color:Colors.black,fontWeight:'400'}}>{gender}</Text>
                </View>
                <View style={{alignItems:'center'}}>
                    <Avatarr/> 
                    <Text style={{color:Colors.black,fontWeight:'400'}}>{brand}</Text>
                </View>
                <Avatarr title={size.toString()}  color={Colors.white}/> 
                <Avatarr title={country.toUpperCase()} color={Colors.white}/> 
          </View>
          </View> 
  
          <TouchableWithoutFeedback>
                <View style={[styles.button,{marginTop:20,marginBottom:20}]}>
                <Text style={{color:Colors.white,fontSize:15,fontWeight:'500'}}>Continue</Text>
                </View>
             </TouchableWithoutFeedback>
          
      </View>
    );
  }
}

const styles = StyleSheet.create({
    nav:{
        height:50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text:{
        paddingHorizontal:35,
        paddingTop: 30,
        textAlign:'center',
    },
    content:{
        flexDirection:'row',
        justifyContent:'space-around'
    },
    button:{
        backgroundColor:Colors.btn_color,
        marginHorizontal: 30,
        height:50,
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center',
        marginTop: 10,
        flexDirection:'row',
  },
});