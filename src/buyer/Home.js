import React, { Component } from 'react';
import { View, Text, StyleSheet,ScrollView,Image,TouchableWithoutFeedback,TouchableOpacity} from 'react-native';
import { AwesomeIcon, Styles,Colors,} from '../bootstrap';
import {Header} from 'react-native-elements';
import {Connect,mapDispatchToProps,mapStateToProps} from '../Redux'; 
import { findAllUsers } from '../Realm';
 
 
class Home extends Component {
  menu_items=['sneakers','streetwear','watches','handbags'] ;

    constructor(props) {
        super(props);
        this.state = {
            activeMenuItem:this.menu_items[0],
        };
      }

 componentDidMount(){
   findAllUsers().then(users=>{
     if(users.length)
      this.props.setUser(users[0]);
   }).catch(e=>alert(e))
 }
 
  render() {
    const {activeMenuItem}= this.state;
    const {items,navigation} = this.props;
    const { navigate } = navigation; 
    return (
        <ScrollView contentContainerStyle={{flexGrow:1}} showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1 }}>
          <View style={Styles.header}>
            
          </View>
          <View style={styles.slider}>
            <Image  style={{flex:1,height:null,width:null, resizeMode:'cover'}} source={require('../assets/images/slider2.png')}/>
          </View>
          {/* menu */}
          <View style={[styles.menu_bar,{borderBottomColor: Colors.grey,borderBottomWidth: 1,}]}>
            {
              this.menu_items.map((item,index)=>(
                <TouchableWithoutFeedback key={index} onPress={()=>this.setState({activeMenuItem:item})} >
                <View  style={[styles.menu_item,(activeMenuItem==item?styles.active_menu_item:null)]}>
                  <Text style={{color:Colors.black,fontSize:12,fontWeight:'200'}}>{item.toLocaleUpperCase()}</Text>
                </View>
                </TouchableWithoutFeedback>
              ))
            }
          </View>
          {
            activeMenuItem == this.menu_items[0]?
              <View style={{flex:1}}>
              {/* popular */}
              <View style={styles.content1}>
              <View style={[styles.menu_bar,{marginHorizontal:20}]}>
                <Text style={{color:Colors.black,fontWeight:'500'}}>Popular Brands</Text>                  
                <TouchableWithoutFeedback onPress={()=>alert('Popular  ')}>
                <View style={styles.menu_bar1}><Text>See All  </Text><AwesomeIcon name={'angle-right'} size={23}/></View>
                </TouchableWithoutFeedback>
              </View>
              <ScrollView style={{height:150}} horizontal={true} showsHorizontalScrollIndicator={false}>
                {
                  items.map((item,index)=>(
                    <TouchableOpacity key={index} onPress={()=>navigate('Details',{item:item})} >
                    <View style={[styles.item_container,{marginHorizontal:5}]}>
                       {
                           <Image source={{uri:item.images[0]}} style={{flex:1,height:null,width:null,resizeMode:'contain',backgroundColor:item.back_color}} /> 
                         }
                    </View>
                    </TouchableOpacity>
                  ))  
                }
              </ScrollView>
              </View>
               {/*most popular*/}
              <View style={styles.content2}>
              <View style={[styles.menu_bar,{marginHorizontal:20}]}>
                  <Text style={{color:Colors.black,fontWeight:'500'}}>Most Popular</Text>
                  <TouchableWithoutFeedback onPress={()=>alert(' Most Popular ')}>
                  <View style={styles.menu_bar1}><Text>See All  </Text><AwesomeIcon name={'angle-right'} size={23}/></View>
                  </TouchableWithoutFeedback>
                </View>
                <ScrollView style={{height:300}} horizontal={true} showsHorizontalScrollIndicator={false}>
                {
                  items.map((item,index)=>(
                    <View key={index} style={styles.card}>
                      <TouchableOpacity onPress={()=>navigate('Details',{item:item})} > 
                      <View style={[styles.item_container]}>
                        <Image source={{uri:item.images[0]}} style={{flex:1,height:null,width:null,resizeMode:'contain'}} />
                      </View>
                      <View style={styles.product_details}>
                        <Text style={styles.p}>{item.name}</Text>
                        <Text style={styles.p}>{item.designer}</Text>
                        <Text style={{fontSize:10}}>Lowest Ask</Text>
                        <Text style={{fontSize:20,color:Colors.black}}>US ${item.price}</Text>
                        <Text style={{fontSize:10}}>{item.sold} sold</Text>
                      </View>
                      </TouchableOpacity>
                    </View>
                  ))
                }
              </ScrollView>
              </View>
              </View>
          :activeMenuItem == this.menu_items[1]?
          <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text> NO {activeMenuItem.toUpperCase()} AVAILABLE</Text>
          </View>            
          :activeMenuItem == this.menu_items[2]?
          <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text> NO {activeMenuItem.toUpperCase()} AVAILABLE</Text>
          </View>
          :
          <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text>NO HANDBAGS AVAILABLE</Text>
          </View>            
          }            
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
      flex:1
  },
  slider:{
    height:150,
    width:'100%',
    backgroundColor:'red',
  },
  content1:{
    height:180,
  },
  content2:{
    height:330,
  },
  menu_bar:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  menu_bar1:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:10,
    height:35,
  },
  active_menu_item:{
    borderBottomColor:Colors.black,
    borderBottomWidth:1
  },
  menu_item:{
    height:40,
    width:'25%',
    justifyContent:'center',
    alignItems:'center',
  },
  item_container:{
    height:150,
    width:200,
  },
  card:{
    borderColor:Colors.grey,
    borderWidth:1,
    marginHorizontal:5
  },
  p:{
    color:Colors.black,
    fontWeight:'200',
    fontSize:15,
  },
  product_details:{
    height:160,
    backgroundColor:Colors.grey,
    paddingLeft:10,
    paddingTop:10,
  }
});

export default Connect(mapStateToProps,mapDispatchToProps)(Home)
