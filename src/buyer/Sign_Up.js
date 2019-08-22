import React, { Component } from 'react'; 
import { View, Text, ScrollView,Dimensions,TextInput, StyleSheet,TouchableOpacity,Animated} from 'react-native';
import { Styles, AwesomeIcon, Colors } from '../bootstrap'
import {Connect,mapDispatchToProps,mapStateToProps} from '../Redux';
import {LoginManager,AccessToken, } from 'react-native-fbsdk';
import { GoogleSignin, statusCodes } from 'react-native-google-signin';
import firebase from 'react-native-firebase'; 
import { apiData } from '../functions';
import { saveUser,findAllUsers} from '../Realm';
import Spinner from 'react-native-loading-spinner-overlay';

GoogleSignin.configure({
  scopes: ['https://www.googleapis.com/auth/userinfo.email','https://www.googleapis.com/auth/profile.agerange.read','https://www.googleapis.com/auth/user.addresses.read','https://www.googleapis.com/auth/userinfo.profile'], // what API you want to access on behalf of the user, default is email and profile
  offlineAccess:false,
  webClientId: '446032612592-34qhs2ldijgkoei1s7nm34neuilugtdv.apps.googleusercontent.com'
});
screenHeight = Dimensions.get('screen').height;

const Inputs = [[
  {label:'Email', value:''},
  {label:'Password', value:''},
],[
  {label:'Username', value:''},
  {label:'Email', value:''},
  {label:'Password', value:''},
 ]
]
 
class Sign_Up extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0),
      activePage:'',
      inputs:Inputs[1],
      loggedInUser:'',
      spinner: false,
    }; 
  }    

componentDidMount(){
   var activePage = this.props.navigation.getParam('activePage');
   this.setState({activePage: activePage, inputs:(activePage=='login'?Inputs[0]:Inputs[1]) })
}


social_auth = async(button)=>{
  if (button == 0) {
    try {
      const result = await LoginManager.logInWithReadPermissions(['public_profile', 'email']);
      if (result.isCancelled) {
        // handle this however suites the flow of your app
        this.setState({spinner:false})
        throw new Error('User cancelled request');
      }
      console.log(`Login success with permissions: ${result.grantedPermissions.toString()}`);
      // get the access token
      const data = await AccessToken.getCurrentAccessToken();

      if (!data) {
        // handle this however suites the flow of your app
        this.setState({spinner:false})
        throw new Error('Something went wrong obtaining the users access token');
      }
  
      // create a new firebase credential with the token
      const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken); 
      // login with credential
      const firebaseUserCredential = await firebase.auth().signInWithCredential(credential);
      const user = firebaseUserCredential.user
      this.authentication('social_auth',{
        username:user.displayName,
        email:user.email,
        photoUrl:user.photoURL,
        userPhone:user.phoneNumber,
        password:user.uid,
      })
      await LoginManager.logOut();
    } catch (e) {
      alert('SOCIAL_AUTH::'+e)
    }
  }else if(button == 1){
    try {
      const data = await GoogleSignin.signIn(); 
      // create a new firebase credential with the token
      const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken)
      // login with credential
      const firebaseUserCredential = await firebase.auth().signInWithCredential(credential);
      const user = firebaseUserCredential.user;
      this.authentication('social_auth',{
        username:user.displayName,
        email:user.email,
        photoUrl:user.photoURL,
        userPhone:user.phoneNumber,
        password:user.uid,
      });
      await GoogleSignin.signOut();
    } catch (e) {
      alert(e) 
    }
  }
}  

email_auth(){   
    this.setState({spinner:true})
    var {inputs,activePage} = this.state;
    if( activePage == 'signup' && !this.validateEmail(inputs[1].value)  )
      this.updateIfError(1,'Please enter a valid email');
    else if(activePage == 'signup' && !this.validatePassword(inputs[2].value))
      this.updateIfError(2,'Password MUST be more than seven characters and contains special characters');
    else 
     this.authentication(activePage,{
      username: (activePage == 'signup'?inputs[0].value:null),
      email: (activePage == 'signup'?inputs[1].value:inputs[0].value),
      password:  (activePage == 'signup'?inputs[2].value:inputs[1].value)
    })
}

authentication(action,credentials){
  this.setState({spinner:true})  
  apiData({
    action:action,
    data:credentials
  }).then(data=>{
    if(data.index)
     this.updateIfError(parseInt(data.index), data.message);
    else
      if (action == 'login' || action == 'social_auth') {
      //check if a user is in realm then update/insert
        findAllUsers().then(users=>{
          if(users.length)
             return;
          saveUser(data).then(user=>{
             this.props.setUser(user);
             this.props.navigation.goBack();
            }).catch(e=>alert(e));
        }).catch(e=>alert(e))
      }else{
        this.props.navigation.navigate('ProfileSetUp');
      }
  }).catch(e=>alert('authentication::'+e))
}

updateIfError(index,error){
    var inputs = [...this.state.inputs];
    inputs[index] = {...inputs[index], error:error};
    this.setState({inputs}) 
 }
validateEmail(text){
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
      return reg.test(text)
 }

 validatePassword = (pass)=>{
  var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  return  pass.length >= 8  && format.test(pass);
 
}
  render() {
    buttons = ['Facebook','Google','Create Account'];
    const { navigate, goBack } = this.props.navigation;
    const {inputs, activePage , loggedInUser } = this.state;
    if (loggedInUser) {
      alert(loggedInUser) 
    } 
    checkFields = ()=>{
      return (!inputs[0].value || !inputs[0].value.trim() || !inputs[1].value || !inputs[1].value.trim() || activePage=='signup' && ( !inputs[2].value || !inputs[2].value.trim()));
    }
    returnActionBtn =(text)=>(<TouchableOpacity  disabled={checkFields()} onPress={()=>this.email_auth()} >
                                  <View style={[Styles.primary_button,{marginTop:10}]}>
                                  <Text style={{color:Colors.white}}>{text}</Text>
                                  </View>
                              </TouchableOpacity>)
    returnInput = (input,index)=>( <View key={index}>
                                    <Text>{input.label}  {input.error?<Text>{input.error}</Text>:null}</Text>
                                    <TextInput value={input.value} secureTextEntry={index==2 || (index==1 && activePage=='login')?true:false} onChangeText={value=>{
                                        iputs = [...inputs];
                                        inputs[index] = {...inputs[index], value:value};
                                        this.setState({inputs})
                                      }} style={Styles.auth_input} 
                                      onFocus={()=>this.updateIfError(index,'')}/>
                                  </View>)
    returnNavigateBtn = (text,activePage)=>(<TouchableOpacity onPress={()=>this.setState({activePage:activePage, inputs:(activePage=='login'?Inputs[0]:Inputs[1])})}>
                              <Text style={{textAlign:'center',}}>{text[0]}<Text style={{color:Colors.black}}> {text[1]}</Text></Text>
                            </TouchableOpacity>)
    return (
      <View style={{flex:1}}>
        <Spinner
          visible={this.state.spinner}
          textContent={'Authenticating...'}
          textStyle={{color:Colors.white}}
        />
         {activePage=='login'? 
            <View> 
            <View style={Styles.header}>
               <TouchableOpacity onPress={()=>goBack()}>
                 <View style={{height:30,width:30}}>
                  <AwesomeIcon name={'angle-left'} size={25} color={Colors.black}/> 
                 </View>
               </TouchableOpacity>
             <Text style={Styles.header_title}>Login</Text>
             <Text/>
             </View> 
             <ScrollView contentContainerStyle={{flexGrow: 1,}} showsVerticalScrollIndicator={false}>
               <View style={[Styles.container,{paddingHorizontal: 30,},]}>
                 <View style={{height:0.35*screenHeight}}>
                   <Text style={{textAlign:'center',marginVertical:15}}>Please Enter Your Email And Password.</Text>
                    {
                     inputs.map((input,index)=>{
                         return returnInput(input, index);
                     })
                    }
                   {returnActionBtn('Sign In')}
                   <TouchableOpacity onPress={()=>navigate('PasswordReset')}>
                    <View style={{alignItems:'center',marginTop:20,flexDirection:'row',justifyContent:'center'}}>
                      <AwesomeIcon name={'lock'} size={20}/>
                      <Text style={{fontWeight:'600'}}>  I forgot my password</Text>
                    </View>
                  </TouchableOpacity>
                 </View>
                 <View style={{height:0.2*screenHeight}}/>
   
                 <View style={{height:0.35*screenHeight,justifyContent:'center',marginBottom:20}}>
                  <Text style={{textAlign:'center',paddingBottom:15}}>Or you can connect using :</Text>
                     {
                       buttons.map((button,index)=>{
                         if (index<2) {
                           return(
                             <TouchableOpacity key={index} onPress={()=>{this.social_auth(index)}}>
                               <View  style={[Styles.primary_button,(index==0? Styles.btn_f :Styles.btn_g)]}>
                                 <AwesomeIcon name={index ==0? 'facebook':'google'} color={Colors.white} size={20}/>
                                 <Text style={{color:Colors.white,fontSize:15}}>  Login with {button}</Text>
                               </View> 
                             </TouchableOpacity>
                           )
                         } 
                       })
                   }
                   <View style={{marginVertical:30,paddingBottom:20}}>
                    {returnNavigateBtn(['Don\'t have an account?', 'Create Account'],'signup')}
                   </View>
                 </View>
               </View>
            </ScrollView>
         </View>:<View> 
            <View style={Styles.header}>
                <TouchableOpacity onPress={()=>goBack()}>
                <View style={{height:30,width:30}}>
                    <AwesomeIcon name={'angle-left'} size={25} color={Colors.black}/> 
                  </View>
                </TouchableOpacity>
              <Text style={Styles.header_title}>Sign Up</Text>
              <Text/>
              </View> 
              <ScrollView contentContainerStyle={{flexGrow: 1,}} showsVerticalScrollIndicator={false}>
                <View style={[Styles.container,{paddingHorizontal: 30,},]}>
                  <View style={{height:0.6*screenHeight,paddingTop:20}}>
                  {
                    buttons.map((button,index)=>{
                      if (index<2) {
                        return(
                          <TouchableOpacity key={index} onPress={()=>{this.social_auth(index)}}>
                            <View  style={[Styles.primary_button,(index==0? Styles.btn_f :Styles.btn_g)]}>
                              <AwesomeIcon name={index ==0? 'facebook':'google'} color={Colors.white} size={20}/>
                              <Text style={{color:Colors.white,fontSize:15}}>  Login with {button}</Text>
                            </View> 
                          </TouchableOpacity>
                        )
                      } 
                    })
                }
                    <Text style={[Styles.text,{paddingVertical:15}]}>Or you can sign up using:</Text>
                    {
                      inputs.map((input,index)=>{
                          return returnInput(input,index);
                      })
                    }
                  <Text style={[Styles.text,{paddingVertical:15}]}>
                    By creating account you accept the <Text style={Styles.link}>Terms and Conditions</Text> and <Text style={Styles.link}>Privacy Policy</Text>
                    </Text>
                  </View> 
                  <View style={{height:0.35*screenHeight,justifyContent:'center',marginTop:20}}>
                  {returnActionBtn('Create Account')}
                  {returnNavigateBtn(['Already have an account?', 'Login'],'login')}
                  </View>
                </View> 
            </ScrollView>
          </View>}
      </View>
    );
  }
}
const styles = StyleSheet.create({ 
  lottie: {
    width: 100,
    height: 100
  }

});
export default Connect(mapStateToProps,mapDispatchToProps)(Sign_Up)
