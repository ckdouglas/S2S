import React, { Component } from 'react';
import { View, Text, StyleSheet,ScrollView,TouchableOpacity,Image } from 'react-native';
import { IonicIcon, Colors } from '../bootstrap';

export default class OwnItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
 
  shoeSizes=()=>{
      let sizes = []
      for (let index = 3; index < 10.5; index+=.5) {
             sizes.push(index)
      }
      return sizes
  }

  render() {
    const {navigation,} = this.props;
    const{navigate,goBack} = navigation;
    return (
      <View style={styles.container}>
           
        <View style={styles.header}>
            <Text/>
            <Text style={styles.menu_item}>Yeezy Boost 350 V2 GID 'Glow'</Text>
            <TouchableOpacity onPress={()=>goBack()}>
                <IonicIcon name={'close'} color={Colors.black} size={20}/>
            </TouchableOpacity>
        </View>

        <View style={styles.content1}>
            <View style={{height:100,width:100,}}>
            <Image source={require('../assets/images/yeezy.png')} style={{ flex:1,height:null,width:null,resizeMode:'contain'}}/>
            </View>
            <Text style={{textAlign:'center',width:'80%',fontSize:13,color:Colors.black}}>
                Tap the sizes you own to add the sneakers to your profile for
                 easy viewing and selling.
            </Text>
        </View>


        <View style={styles.menu}>
            <Text style={[styles.menu_item,{fontWeight:'500'}]}>US SIZE(MEN)</Text>
            <Text style={[styles.menu_item,{fontWeight:'500'}]}>OWN</Text>
        </View>

        <ScrollView contentContainerStyle={{flexGrow:1}} showsVerticalScrollIndicator={false}>
            {
                this.shoeSizes().map((size,index)=>(
                    <View key={index} style={styles.size_item}>
                        <View style={{flexDirection:'row'}}>
                            <View  style={{width:40}}>
                            <Text style={{fontSize:18,color:Colors.black,textAlign:'center'}}>{size} </Text>
                            </View>
                            <Text style={{fontSize:18}}>  x  0</Text>
                        </View>

                        <View style={[styles.buttons_cont,{width:90}]}>
                             <View style={[styles.buttons_cont,styles.bordertopbottom]}>
                                <TouchableOpacity>
                                <IonicIcon name={'add'} color={Colors.black} size={20}/>
                                </TouchableOpacity>
                            </View>

                            <View style={[styles.buttons_cont,styles.bordertopbottom,{borderRightWidth:1}]}>
                                <TouchableOpacity>
                                <IonicIcon name={'add'} color={Colors.black} size={20}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                ))
            }
        </ScrollView>
        <View style={styles.footer}>
            <TouchableOpacity onPress={()=>goBack()}>
            <Text style={{color:Colors.white,fontSize:15}}>SAVE OWN</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    header:{
        height:50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        borderBottomColor: Colors.grey,
        borderBottomWidth: 1,
    },
    menu:{
        borderBottomColor: Colors.black,
        borderBottomWidth: 1,  
        height:35,
        paddingHorizontal: 15, 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center'
    },
    content1:{
        height:150,
        borderBottomColor: Colors.grey,
        borderBottomWidth:1,
        alignItems:'center',
        justifyContent:'center',
    },
    menu_item:{
        color:Colors.black,
        fontSize:12,
    },
    size_item:{
        marginHorizontal:25,
        borderBottomColor: Colors.grey, 
        borderBottomWidth: 1,
        flexDirection:'row',
        height:70,
        alignItems:'center',
        justifyContent:'space-between'
    },
    footer:{
        height:40,
        backgroundColor:Colors.black,
        alignItems:'center',
        justifyContent:'center'
    },
    buttons_cont:{
        alignItems:'center',
        justifyContent:'space-around',
        flexDirection:'row',
        height:40,
    },
    bordertopbottom:{
        borderColor: Colors.grey, 
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        flex:50
    }
});