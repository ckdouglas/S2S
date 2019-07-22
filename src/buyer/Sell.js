import React, { Component } from 'react';
import {  View, Text, StatusBar,StyleSheet ,TouchableOpacity,Image,TouchableWithoutFeedback} from 'react-native';
import {Connect,mapDispatchToProps,mapStateToProps} from '../Redux';
import {Colors,AwesomeIcon, Styles} from '../bootstrap';

 class Sell extends Component {
  
  menu_items = ['personal info','return address','seller 101','link social accounts'];
  
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { user,navigation} = this.props;
    const { navigate } = navigation;
    buttons = ['sign up','login'];

    return (
      user?
      <View style={{flex:1,backgroundColor:Colors.black}}>
          <StatusBar  backgroundColor={ Colors.black }/>
         <View style={Styles.header}>
            <Text/>
            <Text style={{fontSize:12,color:Colors.white}}>REQUEST TO SELL</Text>
            <Text/>
        </View>
        <View style={{flex:1,alignItems:'center'}}>
           <View style={{borderBottomWidth:1,width:'100%',paddingTop:20,paddingBottom:20,borderBottomColor:'gray',alignItems:'center'}}>
             <Text style={{color:Colors.white,fontSize:15}}>
                Complete and submit the form below{'\n'}
                We will notify you once you're approved!
             </Text>
           </View>
            <View style={{width:'100%',alignItems:'center'}} >
                {
                    this.menu_items.map((item,index)=>(
                      <View style={{width:'90%',borderBottomWidth:1,borderBottomColor:Colors.border_color,marginHorizontal:20}}>
                      <TouchableOpacity  onPress={()=>navigate(index==0?'PersonalInfor':index==1?'ReturnAddress':index==2?'Seller101':'SocialAccounts')}> 
                        <View key={index} style={{width:'90%',flexDirection:'row',paddingLeft:20,height:60}}> 
                                  <View style={{width:'15%',alignItems:'center',justifyContent:'center'}}>
                                  <AwesomeIcon name={'plus-circle'} size={20} color={Colors.gray}/>    
                                  </View>
                                  <View style={{alignItems:'center',justifyContent:'center'}}>
                                      <Text style={{color:Colors.gray,fontSize:12}}>{item.toUpperCase()}</Text> 
                                  </View>
                        </View>
                        </TouchableOpacity>
                        </View>
                    ))
                }
            </View>
        </View>
          <TouchableOpacity>
          <View style={{height:50, marginHorizontal:'5%',marginBottom:25,borderColor:Colors.gray,borderWidth:1,alignItems:'center',justifyContent:'center'}}>
                <Text style={{color:Colors.border_color}}>SUBMIT</Text>
            </View>
          </TouchableOpacity> 
      </View>
      :
      <View style={{flex:1}}>

        <View style={{flex:10,alignItems:'center',justifyContent:'center',borderBottomColor:Colors.black,borderBottomWidth:1}}>
            <Text style={{color:Colors.black}}>SELL</Text>
        </View>
       
        <View style={{flex:60,alignItems:'center',justifyContent:'center',marginHorizontal:30}}>
            <View style={{width:100,height:100}}>
                 <Image  style={{height:null, width:null,flex:1, resizeMode:'contain'}} source={require('../assets/images/logo.png')}/>
            </View>
            <Text style={{textAlign:'center',color:Colors.black}}>Apply to sell by registering or logging in.Only approved sellers are permitted to list</Text>
        </View>

        <View style={{flex:30,alignItems:'center',justifyContent:'center'}}>
            {
                 buttons.map((button,index)=>(
                    <TouchableWithoutFeedback key={index} onPress={()=>navigate('Auth_',{page:button})}>
                        <View style={[styles.button,{marginBottom:(button==buttons[0]? 10:null)}]}>
                            <Text style={{color:Colors.black}}>{button.toUpperCase()}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                ))
            }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button:{
    height:50,
    borderColor:Colors.black,
    borderWidth:1,
    width:'80%',
    justifyContent:'center',
    alignItems:'center',
  },
}); 

export default Connect(mapStateToProps,mapDispatchToProps)(Sell)
