import React, { Component } from 'react';
import { View, Text,StyleSheet,TouchableWithoutFeedback,Image,TouchableHighlight,ScrollView } from 'react-native';
import {Colors, AwesomeIcon} from '../bootstrap';
     
export default class CheckOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage:''
    };
  }
 
  componentWillMount(){
    this.setState({activePage:this.props.navigation.getParam('page')})
  }

 

  render() {
    const {navigation} = this.props;
    const {navigate,goBack} = navigation;
    const {activePage} = this.state;
      shoes_pair = {
          name:'PATTA X AIR JORDAN 7 RETRO OG SP \'SHIMMER\'',
          size:'US M 7.0',
          status:'New',
          box_status:'BOX:GOOD',
          price:'$1,000',
          image_url:require('./../assets/images/1.png')
      }
    return (
      <View style={styles.container}>

            {/* header */}
            <View style={styles.header}>
              <View style={{flexDirection:'row'}}>
                
                <TouchableWithoutFeedback>
                <View>
                    <Text style={{fontSize:15, paddingLeft:6,color:Colors.black,borderWidth:1,borderColor:Colors.black,textAlign:'center',paddingHorizontal:7}}>HELP</Text>
                </View>
                </TouchableWithoutFeedback>

              </View>
              <Text style={{fontSize:15,color:Colors.black}}>{activePage.toUpperCase()}</Text>
              <TouchableHighlight onPress={()=>goBack()}>
                <AwesomeIcon name={'close'} size={25}/>
              </TouchableHighlight>
            </View>          
            {/* shoes description */}
            <View style={[styles.shoe_desc,styles.border_bottom]}>
                <Image source={shoes_pair.image_url} style={{ resizeMode:'contain', height:70,width:70}}/>
                <View style={{alignItems:'center',justifyContent:'center', }}>
                    <Text>{shoes_pair.name}</Text>
                    <View style={{flexDirection:'row',marginBottom: 10,}}>
                        <Text>{shoes_pair.size} / </Text>
                        <Text>{shoes_pair.status} / </Text>
                        <Text>{shoes_pair.box_status} / </Text>
                        <Text>{shoes_pair.price}</Text>
                    </View>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={[styles.p_r_policy,styles.border_bottom,{height:55}]}>
              <Text style={{color:Colors.black,borderBottomWidth:1,fontSize:12}}>View our Purchase & Return Policy</Text>
            </View>

            <View style={[styles.p_r_policy,styles.border_bottom,{height:60,flexDirection:'row',justifyContent:'space-between'}]}>
              <Text style={styles.text}>PAYMENT</Text>
              <View style={{flexDirection:'row'}}>
                <AwesomeIcon name={'apple'} size={20}/>
                <Text style={[styles.text,{color:Colors.black}]}> Apple Pay</Text>
              </View>
            </View>

            <View style={[styles.p_r_policy,styles.border_bottom,{height:100,justifyContent:'space-evenly'}]}>
            <View style={{flexDirection:'row',width:'100%',justifyContent:'space-between' }}>
              <Text style={styles.text}>SHIP TO</Text>
              <Text style={[styles.text,{color:Colors.black}]}>Ship to Apple Pay Address</Text>
            </View>

            <View style={{flexDirection:'row',width:'100%',justifyContent:'space-between'}}>
            <Text style={styles.text}>STORE</Text>
            <Text style={[styles.text,{color:Colors.black}]}>Put into GOAT Storage</Text>
            </View>
            </View>

            <View style={[styles.p_r_policy,styles.border_bottom,{height:60,flexDirection:'row',justifyContent:'space-between'}]}>
              <Text style={styles.text}>SHIPPING</Text>
              <Text style={[styles.text,{color:Colors.black}]}>Standard: $10</Text>
            </View>

            {/* pricing */}
            <View>

            <View style={styles.pricing}>
              <Text style={styles.text}>SUBTOTAL</Text>
              <Text>$1,000</Text>
            </View>


            <View style={styles.pricing}>
              <Text style={styles.text}>SHIPPING</Text>
              <Text>$10</Text>
            </View>

            <View style={styles.pricing}>
              <Text style={styles.text}>TOTAL</Text>
              <Text style={[styles.text,{color:Colors.black}]}>$1,010</Text>
            </View>
            </View>
        {/* button view */}
            <View style={{width:'100%',marginTop:80}}>
            <TouchableWithoutFeedback>
              <View style={styles.pay_button}>
                <Text style={{fontSize:20,color:Colors.white}}>Set Up </Text>
                <AwesomeIcon name={'apple'} color={Colors.white} size={20}/>
                <Text style={{fontSize:20,color:Colors.white}}> Pay</Text>
              </View>
            </TouchableWithoutFeedback>
            <Text style={{marginBottom:20,fontSize:12,marginHorizontal:15,marginTop:10,textAlign:'center'}}>By proceeding, I confirm I have read and agreed to the Return & Policy and my shipping address is correct</Text>
            </View>
        </ScrollView>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        height:40,
        paddingHorizontal: 10,
        paddingTop: 10 ,
      },
    shoe_desc:{
        alignItems:'center',
    },
    p_r_policy:{
      alignItems:'center',
      justifyContent:'center',
      marginHorizontal: 20,
    },
    border_bottom:{
      borderBottomWidth:1,
      borderBottomColor: 'grey',
    },
    text:{
      fontSize:12,
    },
    pricing:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginHorizontal: 20,
      padding: 5,
    },
    pay_button:{alignItems:'center',
      justifyContent:'center',
      backgroundColor:Colors.black,
      flexDirection:'row',
      marginHorizontal:20,
      height:50,
      borderRadius:5,
    }
});
