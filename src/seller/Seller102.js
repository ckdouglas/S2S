import React from 'react';
import { View, Image, Dimensions, Text, TouchableWithoutFeedback, StyleSheet, StatusBar,TouchableOpacity,ScrollView} from 'react-native';
import { Transition, FluidNavigator } from 'react-navigation-fluid-transitions';
import { Colors, AwesomeIcon, IonicIcon} from '../bootstrap'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top1: {
    backgroundColor: '#C14534',
    flex: 1,
  },
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
});

const Screen1 = (props) => (
        <Transition appear="bottom">
        <View style={{flex:1,backgroundColor:Colors.black}}>
          <StatusBar backgroundColor={Colors.black}/> 
            <View style={styles.nav}>
            <TouchableOpacity onPress={()=>goBack()}>
                <AwesomeIcon name={'angle-left'} size={25} color={Colors.white}/>
            </TouchableOpacity>
            <Text/>
            <Text/>
            </View>
            <View style={{flex:1}}>
            <View style={{height:'25%'}}>
            </View>
            <View style={{height:'30%',paddingHorizontal:35,alignItems:'center'}}>
                <Text style={{color:Colors.white,fontSize:18}}>SELLER 102</Text>
                <Text style={{color:Colors.white,textAlign:'center'}}>
                    Please review the following exaples to avoid listing issues.
                    Each listing is checked and by a verification specialist,
                    so getting farmilar with our policies will save you time
                    and help you get approved quickly.
                </Text>
            </View>
            </View>
            <View style={{alignItems:'center',justifyContent:'center',marginBottom:20}}>
                <TouchableOpacity onPress={() => props.navigation.navigate('screen3')}>
                  <View style={styles.round_button}>
                      <Text/> 
                      <Text style={{color:Colors.white}}>OK</Text>
                      <AwesomeIcon name={'angle-down'} color={Colors.white} size={25}/>   
                  </View>
                </TouchableOpacity>
            </View>
          </View>
        </Transition>
);

const Screen2 = (props) => (
    <Transition appear="bottom">
    <View style={{flex:1,backgroundColor:Colors.black}}>
      <StatusBar backgroundColor={Colors.black}/> 
        <View style={styles.nav}>
        <TouchableOpacity onPress={()=>goBack()}>
            <AwesomeIcon name={'angle-left'} size={25} color={Colors.white}/>
        </TouchableOpacity>
        <Text/>
        <Text/>
        </View>
        <View style={{flex:1}}>
        <View style={{height:'25%'}}>
        </View>
        <View style={{height:'30%',paddingHorizontal:35,alignItems:'center'}}>
            <Text style={{color:Colors.white,fontSize:18}}>SELLER 103</Text>
            <Text style={{color:Colors.white,textAlign:'center'}}>
                Please review the following exaples to avoid listing issues.
                Each listing is checked and by a verification specialist,
                so getting farmilar with our policies will save you time
                and help you get approved quickly.
            </Text>
        </View>
        </View>
        <View style={{alignItems:'center',justifyContent:'center',marginBottom:20}}>
            <TouchableOpacity onPress={() => props.navigation.navigate('screen2')}>
              <View style={styles.round_button}>
                  <Text/> 
                  <Text style={{color:Colors.white}}>OK</Text>
                  <AwesomeIcon name={'angle-down'} color={Colors.white} size={25}/>   
              </View>
            </TouchableOpacity>
        </View>
      </View>
    </Transition>
);
const Navigator = FluidNavigator({
  screen1: { screen: Screen1 },
  screen2: { screen: Screen2 },
}, {
  style: { backgroundColor: '#000000' },
  defaultNavigationOptions: {
    gesturesEnabled: true,
  },
});

class Seller102 extends React.Component {
  static router = Navigator.router;

  render() {
    const { navigation } = this.props;
    return (
      <Navigator navigation={navigation} />
    );
  }
}

export default Seller102;