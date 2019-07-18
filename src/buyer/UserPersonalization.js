import React, { Component } from 'react';
import { View, Text,StyleSheet,TouchableOpacity,ScrollView,TouchableWithoutFeedback} from 'react-native';
import { Avatar } from 'react-native-elements';
import { AwesomeIcon, Styles, Colors } from '../bootstrap';
import {price_by_size} from '../mock_data'

Avatarr  = (props)=>{ 
        return (
         <Avatar title={props.title} rounded size='large' icon={null} containerStyle={{marginHorizontal:5}} titleStyle={{fontSize:18,color:'gray'}}  overlayContainerStyle={{backgroundColor:props.color}}/>
        )
}

export default class UserPersonalization extends Component {

    gender = ['Male','Female'];
    brands = ['Nike','Addidas','Vans','Gucci','Yeezys',''];
    country = ['uk','us','eu','fr']
  
   constructor(props) {
    super(props);
    this.state = {
         gender:'',
         brand:'',
         size:'',
         country:''
    };
  }

updateValue=(key,value)=>{
    this.setState({[key]:value})
}

  render() {
    const { navigate,goBack } = this.props.navigation; 
    const { gender, brand, size, country} = this.state;

    return ( 
      <View style={styles.container}>
          <View style={styles.nav}>
            <TouchableOpacity onPress={()=>goBack()}>
              <View style={{height:30,width:30}}>
                <AwesomeIcon name={'angle-left'} size={25} color={Colors.black}/> 
              </View>
            </TouchableOpacity>
            <Text style={{fontSize:18,color:Colors.black}} style={{color:Colors.black,fontWeight:'500',fontSize:18}}>
                 User Personalization
            </Text>
            <Text/>
          </View>
          <ScrollView contentContainerStyle={{flexGrow:1}} showsVerticalScrollIndicator={false}>
              <View style={{flex:1}}>
              <View style={{flex:1,alignItems:'center'}}>
                <Text style={[styles.text,{marginBottom:10}]}>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</Text>
                 
                 <View style={styles.content}>
                     <Text style={styles.title}>1. Gender</Text>
                     <ScrollView horizontal={true}>
                     
                     {
                         this.gender.map((input,index)=>(
                             <TouchableOpacity key={index} onPress={()=>this.updateValue('gender',input)}>
                                 <View style={styles.avatarr}>
                                  <Avatarr icon={'account'} color={gender==input?'black':'#f5f5f0'}/> 
                                  <Text>{input}</Text>
                                </View>
                             </TouchableOpacity>
                         ))
                     }
                     </ScrollView>
                 </View>
                 <View style={styles.content}>
                    <Text style={styles.title}>2. Brand</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                     {
                        this.brands.map((input,index)=>(
                            <TouchableOpacity key={index} onPress={()=>this.updateValue('brand',input)}>
                                <View key={index} style={styles.avatarr}>
                                    <Avatarr  icon={'account'}  color={brand==input?'black':'#f5f5f0'} />  
                                    <Text>{input}</Text>
                                </View>
                            </TouchableOpacity>
                        ))
                     }
                     </ScrollView>
                 </View>
                 <View style={styles.content}>
                 <Text style={styles.title}>3. Size</Text>
                 <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                     {
                        Object.keys(price_by_size).map((input,index)=>(
                            <TouchableOpacity key={index} onPress={()=>this.updateValue('size',input)}>
                                <Avatarr key={index} title={(price_by_size[index].size).toString()}  color={size==input?'black':'#f5f5f0'}/>
                            </TouchableOpacity>
                        ))
                     }
                </ScrollView>
                 <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{marginTop:15}}>
                     {
                         this.country.map((input,index)=>(
                            <TouchableOpacity key={index} onPress={()=>this.updateValue('country',input)}>
                                 <Avatarr key={index} title={input.toUpperCase()} color={country==input?'black':'#f5f5f0'} />
                            </TouchableOpacity>
                         ))
                     }
                     </ScrollView>
                 </View>

                </View>
            </View>
          </ScrollView>
          <TouchableWithoutFeedback>
                <View style={[styles.button,{marginTop:20,marginBottom:20}]}>
                <Text style={{color:Colors.white,fontSize:15,fontWeight:'500'}}>Save</Text>
                </View>
             </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal: 10,
    },
    nav:{
        height:50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    content:{
        flex:50,
        alignItems:'center'

    },
    text:{
        paddingHorizontal:35,
        paddingTop: 30,
        textAlign:'center',
    },
    title:{
        fontSize:18,
        color:Colors.black,
        marginTop: 20,
        marginBottom:20
    },
    button:{
        backgroundColor:Colors.btn_color,
        marginHorizontal: 30,
        height:50,
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center',
        marginTop: 10,
        flexDirection:'row',
  }, 
  avatarr:{
      alignItems:'center',
      justifyContent:'center',
  },

});
