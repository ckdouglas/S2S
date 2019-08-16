import React, { Component } from 'react';
import { View, Text, StyleSheet,ScrollView,TouchableWithoutFeedback,TouchableOpacity,Image} from 'react-native';
import { AwesomeIcon, Styles, Colors} from '../bootstrap';
import { deleteUsers } from '../Realm';
import {Connect,mapDispatchToProps,mapStateToProps} from '../Redux';
import { titleCase} from '../functions'
 
 
class Profile extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      activePage:'',
    };
  }
  render() {
    const { navigation,user,setUser} = this.props;
    const { navigate, goBack } = navigation; 

    const menu_items = [
      {title:'Buying',icon:'shopping-cart', page:'Buying'},
      { title:'Selling',icon:'tag'},
      {title:'Portfolio',icon:'industry' },
      {title:'Following', icon:'check-circle' },
      { title:'Blog',  icon:'book'},
      {title:'FAQ',icon:'info-circle'},
      {title:'How It Works',icon:'sliders' },
      {title:'Reviews', icon:'star' },
      {title:'US$ USD',icon:'money'},
      {title:'Log out',icon:'sign-out'},
    ];

    return (
      <ScrollView contentContainerStyle={{flexGrow:1}} showsVerticalScrollIndicator={false}>
      <View style={Styles.container}>
        <View style={[Styles.header,Styles.bottom_border]}>
          <TouchableOpacity onPress={()=>alert('Nav')}>
            <AwesomeIcon name={'info-circle'} size={20} color={Colors.twitter_blue}/>
          </TouchableOpacity>
          <Text style={Styles.header_title}>Account</Text>
          <TouchableOpacity>
             {user?<AwesomeIcon name={'cog'} size={20} color={Colors.twitter_blue}/>:<Text></Text>}
          </TouchableOpacity>
        </View>
        {user?
        <View>
        <View style={[Styles.bottom_border,{height:70}]}>
          <TouchableOpacity onPress={()=>navigate('ProfileSettings')}>
            <Text style={[Styles.header_title,{fontWeight: 'bold',fontSize:20,paddingTop:10,paddingLeft:20}]}>{titleCase(user.username)}</Text>
            <Text style={{paddingLeft:20}}>View and edit profile</Text>
          </TouchableOpacity>
        </View>
          <ScrollView showsVerticalScrollIndicator={false}>
              {menu_items.map((map_item,index)=>(
              <TouchableOpacity onPress={()=>{
                if(map_item.title =='Log out')
                  deleteUsers().then(()=>setUser('')).catch(e=>alert(e))
                else navigate(map_item.page)

              }} key={index} style={[{flexDirection:'row',alignItems:'center',height:60,width:100+'%'}]}>
                <View style={{width:'12%',paddingLeft:10}}>
                <AwesomeIcon name={map_item.icon} size={20}/>
                </View>
                <View style={[{width:'88%',height:60,justifyContent:'center'},Styles.bottom_border]}>
                <Text style={[{fontSize:16,}]}>{map_item.title}</Text>
                </View>
              </TouchableOpacity>           
            ))}
          </ScrollView>
        </View>:

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={[Styles.container]}>
            <View style={{flex:20,alignItems:'center',justifyContent:'center'}}>
              <Image source={require('../assets/images/logo.png')} style={{height:200,width:200}} />
            </View>
            
            <View style={{flex:60,}}>
              <Text style={{textAlign:'center' ,fontSize:17,color:'#000'}}>
                Login in or create an account{'\n'} to manage your Portfolio.{'\n'}
                Bids and Asks
              </Text>

              <TouchableWithoutFeedback onPress={()=>navigate('Sign_Up',{activePage:'signup'})}>
                <View style={[Styles.primary_button,{marginTop:20,marginHorizontal:30}]}>
                <Text style={{color:Colors.white, fontSize:20}}>Sign Up</Text>
                </View>
              </TouchableWithoutFeedback>
              <View style={{alignItems:'center',marginTop:20,}}>
                <Text style={{color:'#000'}}>Already have an account?</Text> 
                <TouchableWithoutFeedback onPress={()=>navigate('Sign_Up', {activePage:'login'})}>
                    <Text style={{color:'#00BFFF', fontSize:20,marginTop:20, marginBottom:20}}>Login</Text>
                </TouchableWithoutFeedback>
              </View>
            </View>
            <View >
            </View>
          </View>
        </ScrollView>
      }
      </View>
      </ScrollView> 
    );
  }
}
const styles = StyleSheet.create({
  button:{marginTop:20,marginBottom:10,borderColor:'#00BFFF',borderWidth:2,width:200,height:50, alignItems:'center',justifyContent:'center'}
});

export default Connect(mapStateToProps,mapDispatchToProps)(Profile)
