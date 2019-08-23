
import React from 'react';
import { View, Image, Dimensions, Text, TouchableWithoutFeedback, StyleSheet, TouchableOpacity} from 'react-native';
import { Transition, FluidNavigator } from 'react-navigation-fluid-transitions';
import { Colors, AwesomeIcon, IonicIcon} from '../bootstrap';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top1: {
    backgroundColor: '#000000',
    flex: 1,
  },
  shoe1: {
    width: 350,
    height: 240,
    position: 'absolute',
    left: Dimensions.get('window').width * 0.2,
    top: Dimensions.get('window').height * 0.5 - 160,
    transform: [{ rotate: '35deg' }],
  },
  headerContainer1: {
    padding: 20,
    paddingTop: Dimensions.get('window').height * 0.1,
  },
  header1: {
    color: '#FFF',
    fontSize: 80,
    marginBottom: -14,
    fontFamily: 'Bebas Neue',
  },
  subHeader1: {
    color: '#FFF',
    fontSize: 34,
    fontFamily: 'Bebas Neue',
  },
  top2: {
    backgroundColor: '#000000',
    flex: 1,
  },
  shoe2: {
    width: 291,
    height: 200,
    position: 'absolute',
    left: Dimensions.get('window').width * 0.5 - (291 / 2),
    top: 60,
  },
  paper2: {
    backgroundColor: '#000000',
    position: 'absolute',
    left: 0,
    top: Dimensions.get('window').height * 0.5,
    bottom: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingTop: 70,
    padding: 10,
  },
  price: {
    color: '#FFF',
    fontSize: 34,
    fontFamily: 'Bebas Neue',
    textAlign: 'center',
    paddingTop: -55 + Dimensions.get('window').height * 0.5,
  },
  headerContainer2: {
    padding: 20,
    justifyContent: 'flex-end',
    paddingTop: 50,
    alignItems:'center',
    alignContent:'center'
  },
  header2: {
    color: '#444',
    fontSize: 42,
    textAlign: 'center',
    fontFamily: 'Bebas Neue', 
    marginBottom: -6,
  },
  subHeader2: {
    color: '#444',
    fontSize: 22,
    textAlign: 'center',
    fontFamily: 'Bebas Neue',
  },
  smallImageContainer: {
    position: 'absolute',
    left: 0,
    top: Dimensions.get('window').height * 0.54,
    bottom: 0,
    right: 0,
    alignItems: 'center',
    paddingTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: 80,
    marginRight: 80,
    margin: 30,
  },
  smallImageWrapper: {
    width: Dimensions.get('window').width / 4,
    height: Dimensions.get('window').width / 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ECECEC',
  },
  smallImage: {
    width: 90,
    height: 50,
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
  <View style={styles.container}>
    <TouchableWithoutFeedback onPress={() => props.navigation.navigate('screen2')}>
      <View style={styles.top1}>
        <Transition appear="right" shared="image">
          <Image style={styles.shoe1} source={require('../assets/images/j13.png')} />
        </Transition>
        <Transition appear="left">
          <View style={styles.headerContainer1}>
            <Text style={styles.header1}>Seller 101</Text>
          </View>
        </Transition>
      </View>
    </TouchableWithoutFeedback>
  </View>
);

const Screen2 = (props) => (
  <View style={styles.container}>
      <View style={styles.top2}>
        <View style={styles.nav}>
         <TouchableOpacity onPress={()=>props.navigation.goBack()}>
              <AwesomeIcon name={'angle-left'} size={25} color={Colors.white}/>
         </TouchableOpacity>
         <Text/>
          <Text/>
         </View>
        <Transition appear="bottom">
          <View style={styles.paper2}>
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
        <Transition appear="horizontal">
          <View style={styles.headerContainer2}>
            <Text style={{color:Colors.white,fontSize:18,textAlign:'center'}}>SELLER 101</Text>
            <Text style={{color:Colors.white,textAlign:'center'}}>
                  Please review the following exaples to avoid listing issues.
                  Each listing is checked and by a verification specialist,
                  so getting farmilar with our policies will save you time
                  and help you get approved quickly.
              </Text>
          </View>
        </Transition>
      </View>
  </View>
);

const Screen3 = (props) => (
  <View style={styles.container}>
      <View style={styles.top1}>
      <View style={styles.nav}>
         <TouchableOpacity onPress={()=>props.navigation.goBack()}>
              <AwesomeIcon name={'angle-left'} size={25} color={Colors.white}/>
         </TouchableOpacity>
         <Text/>
          <Text/>
         </View>
        <Transition appear="left">
          <View style={{flex:1 ,backgroundColor:'red'}}> 
          </View>
        </Transition>

        <Transition appear="bottom">
        <View style={{flex:1, justifyContent:"space-between",alignItems:'center'}}> 
        
        <View style={{height:'20%',paddingHorizontal:20}}>
          <Text style={{ textAlign:'center', color:Colors.white,fontSize:16,paddingTop:10}}>S2S CONSIDERS THESE WORN OUT</Text>
          <Text style={{ textAlign:'center', color:Colors.white,fontSize:12,paddingTop:10}}>
            Please make sure to inspect your sneakers before posting them for sale.
            If your sneakers shows any signs of your wears,{'/n'}they must must be listed under USED section.
          </Text>
        </View>
        <TouchableOpacity onPress={() => props.navigation.navigate('screen4')}>
                  <View style={styles.round_button}>
                      <Text/> 
                      <Text style={{color:Colors.white}}>OK</Text>
                      <AwesomeIcon name={'angle-down'} color={Colors.white} size={25}/>   
                  </View>
                </TouchableOpacity>
          </View>
        </Transition>
      </View>
  </View>
);
const Navigator = FluidNavigator({
  screen1: { screen: Screen1 },
  screen2: { screen: Screen2 },
  screen3: { screen: Screen3 },

}, {
  style: { backgroundColor: '#000000' },
  defaultNavigationOptions: {
    gesturesEnabled: true,
  },
});

class Seller101 extends React.Component {
  static router = Navigator.router;

  render() {
    const { navigation } = this.props;
    return (
      <Navigator navigation={navigation} />
    );
  }
}

export default Seller101;