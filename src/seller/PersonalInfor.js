import React, { Component } from 'react';
import { View, Text , StyleSheet,TouchableOpacity,StatusBar,TextInput,ScrollView} from 'react-native';
import {Colors,AwesomeIcon,IonicIcon} from '../bootstrap';
import DatePicker from 'react-native-datepicker';
import { Connect,mapDispatchToProps,mapStateToProps } from '../Redux';
import {titleCase} from '../functions'
import { updateUser } from '../Realm'


class PersonalInfor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date:'',
      name:'',
      phone:'',
    };
  }

  componentDidMount(){
    user = this.props.user;
    if (user.phone_number) this.setState({phone:user.phone_number});
    if (user.dob) this.setState({date:user.dob});
    this.setState({name:user.username});
  }

  checkEntries(){
    if(this.state.date && this.state.name && this.state.phone)
      return true;
    return false;
    
  };
  render() {
    const { user, navigation} = this.props;
    const { navigate, goBack} = navigation;
    const { name, date, phone } = this.state;
    return (
      <ScrollView contentContainerStyle={{flexGrow:1}}>
      <View style={{flex:1,backgroundColor:Colors.black}}>
        <StatusBar backgroundColor={Colors.black}/>
        <View style={styles.nav}>
        <Text/>
          <Text style={{color:Colors.white}}>PERSONAL INFO</Text>
          <TouchableOpacity onPress={()=>goBack()}>
              <IonicIcon name={'close'} size={25} color={Colors.white}/>
            </TouchableOpacity>
        </View>
        <View style={{flex:1,}}>
          <View style={{height:130,borderBottomColor:Colors.border_color,borderBottomWidth:1}}>
          <Text style={{fontSize:15,textAlign:'center',color:Colors.white,marginTop:20,marginHorizontal:20}}>
            This info is used to verify identity and deposit earnings after your sneakers sell.
            We well never shares it with anyone else.
          </Text>
          </View>
          <View style={{marginHorizontal:30, paddingTop:30}}>
              <TextInput 
                placeholder={'Full Legal Name'} value={ titleCase(name)} 
                placeholderTextColor={'gray'}
                style={{height: 40,color:Colors.white, borderBottomColor: 'gray', borderBottomWidth: 1}}
                onChangeText={(text)=>this.setState({name:text})}
               /> 
              <View style={{flexDirection:'row',marginTop:20}}>
              <TextInput 
                placeholder={'Phone Number'}  
                placeholderTextColor={'gray'} 
                keyboardType="phone-pad" 
                value={phone}
                style={{height: 40,color:Colors.white,width:'50%',marginRight:2,borderBottomColor: 'gray', borderBottomWidth: 1}}
                onChangeText={(text)=>this.setState({phone:text})}
              /> 
              <DatePicker 
                style={{height: 40,color:Colors.white,width:'50%',marginRight:2,borderBottomColor: 'gray', borderBottomWidth: 1}}
                date={date}
                mode="date"
                placeholder="Select Date"
                format="YYYY-MM-DD"
                // minDate="2016-05-01"
                // maxDate="2016-06-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0
                  },
                  dateInput: {
                    marginLeft: 36,
                  },
                  dateText:{
                    color:Colors.white,
                  }
                }}
                onDateChange={(date) => {this.setState({date: date})}}
              />
              </View>
          </View>
        </View>
        <TouchableOpacity onPress={()=>updateUser({ID:user._id,phone_number:phone,dob:date})
                                      .then().catch(err=>alert(err))} 
              disabled={this.checkEntries()?false:true}>
          <View style={[this.checkEntries()?{borderTopColor:Colors.white}:{color:'gray',},{height:50,borderTopWidth:1,alignItems:'center',justifyContent:'center'}]}>
                <Text style={this.checkEntries()?{color:Colors.white}:{color:'gray'}}>SUBMIT</Text>
          </View>
        </TouchableOpacity>
      </View>
      </ScrollView> 
    );
  }
}

const styles = StyleSheet.create({

  nav:{
      height:50,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomColor: Colors.border_color,
      borderBottomWidth: 1,
      paddingHorizontal:10
  },
  text:{
      paddingHorizontal:35,
      paddingTop: 30,
      textAlign:'center',
  },
});
export default Connect(mapStateToProps,mapDispatchToProps)(PersonalInfor)
