import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image} from 'react-native';
import {Colors, Styles,AwesomeIcon, IonicIcon,} from '../bootstrap';
import {Avatar, } from 'react-native-elements';
import {Connect, mapStateToProps, mapDispatchToProps} from '../Redux';

class ViewWear extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wear:'',
    }; 
  }
  componentWillMount(){
    this.setState({wear:this.props.navigation.getParam('data')})
  }
 
  render() {
    const { wear, }= this.state; 
    const { user, navigation, items } = this.props;
    const { navigate, goBack }=navigation;

    return (
      <View style={Styles.container}>
         <View style={[Styles.header,{height:100,paddingHorizontal:15}]}>

          <TouchableOpacity onPress={()=>goBack()}>
            <View>
               <AwesomeIcon name={'angle-left'} size={25} color={Colors.twitter_blue}/>
            </View>
          </TouchableOpacity>
          <Text/>
          {/* check pass real onbject */}
          <TouchableOpacity onPress={()=>navigate('Details',{item:items[0]})}>
              <View style={{flexDirection:'row'}}>
                <Text style={[Styles.text,{fontWeight:'500'}]}>VIEW SNEAKER  </Text>
                <AwesomeIcon name={'caret-right'} size={20} color={Colors.black}/> 
              </View>
          </TouchableOpacity>
        
        </View>
        
        <View style={{height:'60%',}}>
            <Image  
                style={{flex:1, height:null,width:null, resizeMode:'contain'}}
                source={{uri:wear.uri}} 
            />
        </View>
        <View style={{height:'20%', flexDirection:'row',justifyContent:'space-between',alignItems:'flex-end',paddingBottom:10}}>
            <View style={{flexDirection:'row'}}>
                <View style={{marginLeft:10}}>
                     <Avatar rounded size={'medium'} source={{ uri:'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',}}/> 
                </View>
                <View style={{marginLeft:15}}>
                    <Text>ONFEET</Text>
                    <Text>{user.email}</Text>
                </View> 
            </View>

            <View style={[{flexDirection:'row',paddingHorizontal:3,marginRight:10}]}>
              <TouchableOpacity>
                <View style={[{flexDirection:'row',height:25,width:50, justifyContent:'center',alignItems:'center'},Styles.border,]}> 
                      <AwesomeIcon name={'heart'} size={15}/> 
                      <Text style={[Styles.text,{marginHorizontal:5,fontSize:15}]}>330</Text>
                  </View>
              </TouchableOpacity>

                <View style={{marginHorizontal:2}}>
                  <TouchableOpacity>
                      <AwesomeIcon name={'ellipsis-h'} size={25}/>
                  </TouchableOpacity>
                </View>
            </View>
        </View> 
      </View>
    );
  }
}

export default Connect(mapStateToProps,mapDispatchToProps)(ViewWear);