import React, { Component } from 'react';
import { View, Text, StyleSheet,StatusBar,TouchableOpacity,ScrollView,Dimensions,TouchableWithoutFeedback} from 'react-native';
import MapView from 'react-native-maps';
import {Colors, AwesomeIcon, IonicIcon} from '../bootstrap'

export default class ReturnAddress extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {navigation} = this.props;
    const { navigate, goBack} = navigation;
    return (
      <View style={{flex:1,backgroundColor:Colors.black}}>
        <StatusBar backgroundColor={Colors.black}/>
        <View style={styles.nav}>
            <TouchableOpacity onPress={()=>goBack()}>
              <AwesomeIcon name={'angle-left'} size={25} color={Colors.white}/>
            </TouchableOpacity>
            <Text style={{color:Colors.white}}>RETURN ADDRESS</Text>
            <TouchableOpacity onPress={()=>goBack()}>
              <IonicIcon name={'close'} size={25} color={Colors.white}/>
            </TouchableOpacity>
        </View>

        <View style={{flex:1}}>
        <View style={{height:80,borderBottomColor:'gray',borderBottomWidth:1,justifyContent:'space-around'}}>

          <View style={{flexDirection:'row'}}>
          <AwesomeIcon name={'map-marker'} size={20} color={'gray'}/>  
          <Text style={{color:Colors.white,paddingLeft:20}}>53 Kings Nyeri</Text>  
          </View>
          <View style={{flexDirection:'row'}}>
          <AwesomeIcon name={'map-pin'} size={20} color={'gray'}/>  
           <Text style={{color:Colors.white,paddingLeft:20}}>505 Kimathi road</Text>  
          </View>
        </View>
        <View style={styles.container}>
            <MapView
             style={styles.map}
             region={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              }}
            >
        </MapView>
        </View>
        </View>

        <View style={{height:50,borderTopColor:'gray',borderTopWidth:1,alignItems:'center',justifyContent:'center'}}>
              <Text style={{color:Colors.white}}>CONTINUE</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'red',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  nav:{
    height:50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal:10,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
},
  map: {
    ...StyleSheet.absoluteFillObject,
  },
 });