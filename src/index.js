import React, { Component } from 'react';
import { createAppContainer, createStackNavigator, createBottomTabNavigator,} from 'react-navigation';
import { fromRight } from  'react-navigation-transitions';
import { GoogleSignin } from 'react-native-google-signin';
import { apiData } from './functions' 
import {Connect,mapDispatchToProps,mapStateToProps} from './Redux';

import {
  Welcome, Sign_Up ,PasswordReset,ProfileSetUp, Home, Browse, Search, Sell, Profile, PhoneVerification, UserPersonalization, Confirmation, Details,
  CheckOut, MoreSizes, Offer, OwnItem, ViewWear, ProfileSettings, Selling,
  
  Auth_ ,PersonalInfor,ReturnAddress, Seller101,SellRequest,
  
  AwesomeIcon, Colors,
} from './bootstrap';

const TabNavigator = createBottomTabNavigator({
  Home: Home,
  Browse: Browse,
  Search: Search,
  Sell: Sell,
  Profile:Profile,
},{
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon:({focused,horizantal,tintColor})=>{
      const {routeName} = navigation.state;
      let IconComponent = AwesomeIcon;
      let iconName;
      switch (routeName) {
        case 'Home':
          iconName = 'home'
          break;
        case 'Browse':
          iconName = 'th-large' 
          break;
        case 'Search':
           iconName = 'search'
          break;
        case 'Sell':
           iconName = 'tag'
          break;
        case 'Profile':
          iconName = 'user'
          break;
      }
      return <IconComponent name={iconName} size={20} color={tintColor} />;
    }
  }),
  tabBarOptions:{
    activeTintColor:Colors.white ,
    inactiveTintColor:'gray',
    style: {
      backgroundColor: Colors.black,
    }
  }
});

const AppNavigator = createStackNavigator({
    Welcome:{screen:Welcome},
    Sign_Up:{screen:Sign_Up},
    PasswordReset:{screen:PasswordReset},
    ProfileSetUp:{screen:ProfileSetUp},
    Home:{screen:TabNavigator},
    PhoneVerification:{screen:PhoneVerification},
    UserPersonalization:{screen:UserPersonalization},
    Confirmation:{screen:Confirmation},
    Details:{screen:Details},
    CheckOut:{screen:CheckOut},
    MoreSizes:{screen:MoreSizes},
    Offer:{screen:Offer},
    OwnItem:{screen:OwnItem},
    ViewWear:{screen:ViewWear},
    ProfileSettings:{screen:ProfileSettings},
    
    Auth_:{screen:Auth_},
    PersonalInfor:{screen:PersonalInfor},
    ReturnAddress:{screen:ReturnAddress},
    Seller101:{screen:Seller101},
    Selling:{screen:Selling},
    SellRequest:{screen:SellRequest}

},{
    headerMode:'none',
    navigationOptions:{
        headerVisible: false
    },
    initialRouteName: 'Home',
    transitionConfig: () => fromRight(350),
});


var AppContainer =  createAppContainer(AppNavigator);
class Application extends Component {
   // tab navigator
   constructor(props) {
     super(props)
      apiData({action: 'get_shoes'}).then(data=>{
        this.props.setShoes(data)
      }).catch(err=>alert(err));
      
      apiData({action:'get_wears'}).then(data=>{
        this.props.setWears(data)
      }).catch(err=>alert(err))
  };

render() {
    console.disableYellowBox = true;
    return (<AppContainer/>);
}
}
export default Connect(mapStateToProps,mapDispatchToProps)(Application)
