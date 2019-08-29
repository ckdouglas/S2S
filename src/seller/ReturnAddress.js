import React, { Component } from 'react';
import { View, Text, StyleSheet,StatusBar,TouchableOpacity,Alert,ScrollView,Dimensions,TouchableWithoutFeedback} from 'react-native';
import MapView from 'react-native-maps';
import {Colors, AwesomeIcon, IonicIcon} from '../bootstrap'
import { Connect,mapDispatchToProps,mapStateToProps } from '../Redux';
import Geocoder from 'react-native-geocoder';
import {Marker } from 'react-native-maps';
import { apiData } from '../functions';
import { updateUser } from '../Realm';


class ReturnAddress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      available:false,
      location:{
        place:'',
        address:'',
        lat:'',
        lng:''
      }
    };
  }
  
  componentWillMount(){
    if(this.props.user.return_address != null){
      this.setState({location:JSON.parse(this.props.user.return_address)})
      if (this.state.location) this.setState({available:true})
    }
    else
    {
    navigator.geolocation.getCurrentPosition(
      position => {
        lat = position.coords.latitude;
        lng = position.coords.longitude;
        Geocoder.geocodePosition({lat, lng}).then((results)=>{
            if(!results || !results[0] ||results[0].country ==null)
              this.setState.setState({location:{lat:lat,lng:lng},}) 
            else
              this.setState({location:{place:results[0].locality+','+results[0].country,address:results[0].formattedAddress,lat:lat,lng:lng},available:true})
            }).catch((err)=>{alert(err)})
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }
  }

  render() {
    const { navigation ,user} = this.props;
    const { navigate, goBack } = navigation;
    const { location,available} = this.state;
    latLng = {latitude:location.lat,longitude:location.lng}
    return_address = JSON.stringify(location)
    alert(JSON.stringify(user))
    region ={
      latitude:location.lat,
      longitude:location.lng,
      latitudeDelta: 0.015*5,
      longitudeDelta: 0.0121*5
    }


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
          <Text style={{color:Colors.white,paddingLeft:20}}>{location.place}</Text>  
          </View>
          <View style={{flexDirection:'row'}}>
          <AwesomeIcon name={'map-pin'} size={20} color={'gray'}/>  
           <Text style={{color:Colors.white,paddingLeft:20}}>{location.address}</Text>  
          </View>
        </View>
        <View style={styles.container}>
            <MapView style={styles.map} showsUserLocation={true} showsMyLocationButton={true} region={region}> 
            <Marker coordinate={latLng} title={"Return Address"}/>
            </MapView>
        </View>
        </View>
        <TouchableOpacity disabled={available == false?true:false} onPress={()=>apiData({
                                          action:'update_user',
                                          data:{ID:user._id,return_address}
                                        }).then(
                                          updateUser({ID:user._id,return_address:return_address})
                                          .then(
                                            navigation.goBack()
                                          )
                                        ).catch(err=>alert(err))} >
          <View style={{height:50,borderTopColor:'gray',borderTopWidth:1,alignItems:'center',justifyContent:'center'}}>
                <Text style={available == false?{color:Colors.gray}:{color:Colors.white}}>CONTINUE</Text>
          </View>
        </TouchableOpacity>
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

export default Connect(mapStateToProps,mapDispatchToProps)(ReturnAddress)
