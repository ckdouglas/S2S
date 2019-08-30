
import React from 'react';
import { View, Image, Dimensions, Text, TouchableWithoutFeedback, StyleSheet, TouchableOpacity} from 'react-native';
import { Transition, FluidNavigator } from 'react-navigation-fluid-transitions';
import { Colors, AwesomeIcon, IonicIcon,Styles} from '../bootstrap';
import {IndicatorViewPager,PagerDotIndicator} from 'rn-viewpager';
import { Connect,mapDispatchToProps,mapStateToProps } from '../Redux';
import { apiData } from '../functions';
import { updateUser } from '../Realm';

images_damaged=['j13.png','j13.png','j13.png','j13.png'];

nav={};
_user={};

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
 
  headerContainer2: {
    padding: 20,
    justifyContent: 'flex-end',
    paddingTop: 50,
    alignItems:'center',
    alignContent:'center'
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

setNavivation=(navigation)=>{
   nav=navigation;
}

_renderDotIndicator=()=>{
  return <PagerDotIndicator pageCount={3}
  dotStyle={{backgroundColor:Colors.black}}
  selectedDotStyle={{backgroundColor:Colors.white}}/>
}

const Screen1 = (props) => (
  <View style={styles.container}>
    <TouchableWithoutFeedback onPress={() => props.navigation.navigate('screen2')}>
      <View style={styles.top1}>
        <Transition appear="right" shared="image">
          <Image style={styles.shoe1} resizeMode={'contain'} source={require('../assets/images/j13.png')} />
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
         <Transition appear='top'>
          <View style={{height:200, alignItems:'center',justifyContent:'center'}}>
            {/* place an icon here */}
            <Text style={{color:Colors.white}}>Icon Here</Text>
          </View>
         </Transition>
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
          <View style={{flex:1}}> 
          <IndicatorViewPager style={{flex:1,backgroundColor:Colors.white}} indicator={this._renderDotIndicator()}>
                        {
                          images_damaged.map((image,index)=>(
                            <View style={{height:250,width:'100%'}}>
                                <Image source={require('../assets/images/j13.png')} style={{flex:1,height:null,width:null,resizeMode:'cover'}}/> 
                            </View>
                          ))
                        }
                          
           </IndicatorViewPager> 
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

const Screen4 = (props) => (
      <View style={styles.top1}>
        <View style={{height:'10%',flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center',paddingHorizontal:10,}}>
          <TouchableOpacity onPress={()=>props.navigation.goBack()}>
                <AwesomeIcon name={'angle-left'} size={25} color={Colors.white}/>
          </TouchableOpacity>
          <Text/>
            <Text/>
        </View>
        <View style={{height:'20%',marginHorizontal:30,justifyContent:'space-around',borderBottomColor:Colors.white,borderBottomWidth:1}}>
          <Transition appear="left">
            <View style={{alignItems:'center'}}> 
                <Text style={{color:Colors.white}} >Icon here</Text>
            </View>
          </Transition>
          <Transition appear="right">
            <View style={{alignItems:'center',}}> 
               <Text style={{color:Colors.white,textAlign:'center'}} >Security is important to us.{'\n'}Please read our seller verification policy below</Text>
            </View>
          </Transition>
        </View>  
      
        <View style={{height:'70%',alignItems:'center',justifyContent:"space-between"}}> 
          <View style={{paddingTop:15}}>
            <Text style={{color:Colors.white,textAlign:'center',fontSize:16,paddingTop:15}}>SELLER VERIFICATION POLICY</Text>
            <Text style={{color:Colors.white,textAlign:'center',paddingTop:15}}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur
            </Text>
          </View>
          <TouchableOpacity 
                  onPress={()=>apiData({
                    action:'update_user',
                    data:{ID:_user._id,seller101:true}
                  }).then(
                    updateUser({ID:_user._id,seller101:true})
                    .then(
                      nav.goBack()
                    )
                  ).catch(err=>alert(err))}>
                    <View style={styles.round_button}>
                        <Text style={{color:Colors.white}}>I AGREE</Text>
                    </View>
          </TouchableOpacity>
          </View>
    
      </View>
);

const Navigator = FluidNavigator({
  screen1: { screen: Screen1 },
  screen2: { screen: Screen2 },
  screen3: { screen: Screen3 },
  screen4: { screen: Screen4 },


}, {
  style: { backgroundColor: '#000000' },
  defaultNavigationOptions: {
    gesturesEnabled: true,
  },
});

class Seller101 extends React.Component {
  static router = Navigator.router;

  render() {
    const { navigation, user } = this.props;
    nav = navigation;
    _user = user;
    return (
      <Navigator navigation={navigation}/>
    );
  }
}

export default Connect(mapStateToProps,mapDispatchToProps)(Seller101)