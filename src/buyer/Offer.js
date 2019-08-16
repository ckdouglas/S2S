import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity,ScrollView,TouchableWithoutFeedback } from 'react-native';
import { IonicIcon, Colors} from '../bootstrap'

export default class Offer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
 
  render() { 
    const {navigation} = this.props;
    const {navigate,goBack} = navigation;

    const inputs = ['top offer','lowest price'];
    return (
      <View style={{flex:1}}>
        <ScrollView contentContainerStyle={{flexGrow:1}} showsVerticalScrollIndicator={false}>
          <View style={{flex:1}}>
            {/* header */}
            <View style={styles.header}>
              <Text/>
              <Text style={styles.text}>SZ 23, NEW</Text>
              <TouchableOpacity onPress={()=>goBack()}>
                <IonicIcon name={'close'} size={20}/>
              </TouchableOpacity>
            </View>
            {/*  */}
            <View style={styles.chooser}>

            </View>
            {/*  */}
            <View style={{alignItems:'center'}}>
              <View style={{flexDirection:'row'}}>
              <Text style={[{fontWeight:'500'},styles.text]}>EXPIRES IN 30 DAYS </Text>
              <IonicIcon name={'arrow-dropdown'} size={20} color={Colors.black}/>
              </View>
              <Text style={[styles.text,{width:'70%',textAlign:'center',paddingTop:20}]}>You won't be charged unless you offer is accepted by a seller<Text> Learn More</Text></Text>
            </View>
            <View style={styles.input_container}>
              {
                inputs.map((input,index)=>(
                  <View key={index} style={[styles.input_item,(index==0?styles.left_input:null)]}>
                    <Text style={styles.text}>{input.toUpperCase()}</Text>
                    <Text>----</Text>
                    <Text/>
                  </View>
                ))
              }
            </View>
            <Text style={[styles.text,{textAlign:'center',paddingTop:20}]}>LAST PRICES SOLD / ALL SIZES</Text>
           
            <View style={styles.list_price_item}>
              <Text style={styles.text}>$170</Text>
              <Text>05.26.19</Text>
              <Text style={styles.text}>$125</Text>
              <Text>05.26.19</Text>
            </View>

            <View style={styles.list_price_item}>
              <Text style={styles.text}>$175</Text>
              <Text>05.26.19</Text>
              <Text style={styles.text}>$125</Text>
              <Text>05.26.19</Text>
            </View>

            <View style={styles.list_price_item}>
              <Text style={styles.text}>$180</Text>
              <Text>05.26.19</Text>
              <Text style={styles.text}>$155</Text>
              <Text>05.26.19</Text>
            </View>

            <View style={styles.list_price_item}>
              <Text style={styles.text}>$110</Text>
              <Text>05.26.19</Text>
              <Text style={styles.text}>$105</Text>
              <Text>05.26.19</Text>
            </View>

            <View style={styles.list_price_item}>
              <Text style={styles.text}>$180</Text>
              <Text>05.26.19</Text>
              <Text style={styles.text}>$125</Text>
              <Text>05.26.19</Text>
            </View>

            <View style={styles.list_price_item}>
              <Text style={styles.text}>$170</Text>
              <Text>05.26.19</Text>
              <Text style={styles.text}>$125</Text>
              <Text>05.26.19</Text>
            </View>

          </View>
        </ScrollView>
        <TouchableWithoutFeedback onPress={()=>navigate('CheckOut',{page:'offer'})}>
          <View style={styles.button}>
            <Text style={{color:Colors.white,fontSize:12}}>NEXT</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:10,
    height:60,alignItems:'center',
    borderBottomColor:Colors.black,
    borderBottomWidth:1,
  },
  chooser:{
    height:250,
  },
  text:{
    color:Colors.black,
    fontSize:12,
    fontWeight:'500'
  },
  input_container:{
    flexDirection:'row',
    borderBottomColor:Colors.border_color,
    borderBottomWidth:1,
  },
  input_item:{
    height:100, 
    width:'50%',
    marginTop: 20,
    alignItems:'center',
    marginBottom:20,
    alignItems:'center',
    justifyContent:'space-between'
  },
  left_input:{
    borderRightWidth: 1,
    borderRightColor: Colors.border_color,
  },
  button:{
    height:50,
    backgroundColor:Colors.black,
    alignItems:'center',
    justifyContent:'center',
  },
  list_price_item:{
    flexDirection:'row',
    justifyContent:'space-around',
    marginTop:20,
    borderBottomColor:Colors.border_color,
    borderBottomWidth:1,
    paddingBottom:15,
  },
});