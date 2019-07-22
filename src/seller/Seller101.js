import React, { Component } from 'react';
import { View, Text, StyleSheet,StatusBar,TouchableOpacity,ScrollView,Dimensions,TouchableWithoutFeedback} from 'react-native';
import { Colors, AwesomeIcon, IonicIcon} from '../bootstrap'

export default class Seller101 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { navigation} = this.props;
    const { navigate, goBack} = navigation; 
    return (
      <View style={{flex:1,backgroundColor:Colors.black}}>
      <StatusBar backgroundColor={Colors.black}/> 
        <View style={styles.nav}>
        <TouchableOpacity onPress={()=>goBack()}>
             <AwesomeIcon name={'arrow-left'} size={25} color={Colors.white}/>
        </TouchableOpacity>
        <Text/>
         <Text/>
        </View>
        <View style={{flex:1}}>
        <View style={{height:'25%'}}>
        </View>
        <View style={{height:'30%',paddingHorizontal:35,alignItems:'center'}}>
            <Text style={{color:Colors.white,fontSize:18}}>SELLER 101</Text>
            <Text style={{color:Colors.white,textAlign:'center'}}>
                Please review the following exaples to avoid listing issues.
                Each listing is checked and by a verification specialist,
                so getting farmilar with our policies will save you time
                and help you get approved quickly.
            </Text>
        </View>
        </View>

        <View style={{alignItems:'center',justifyContent:'center',marginBottom:20}}>
            <TouchableOpacity onPress={()=>alert('wertyu')}>
              <View style={styles.round_button}>
                  <Text/> 
                  <Text style={{color:Colors.white}}>OK</Text>
                  <AwesomeIcon name={'angle-down'} color={Colors.white} size={25}/>   
              </View>
            </TouchableOpacity>
        </View>
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
      paddingHorizontal:10,
  },
  round_button:{
      height:100,
      width:100,
      borderColor: 'gray',
      borderRadius: 50, 
      borderWidth: 1,
      alignItems:'center',
      justifyContent:'space-around'
  }
})