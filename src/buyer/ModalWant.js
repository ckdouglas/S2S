import React, { Component } from 'react';
import { View, Text,TouchableOpacity ,StyleSheet,Image} from 'react-native';
import Modal from 'react-native-modalbox';
import { AwesomeIcon,Colors} from '../bootstrap';

export default class Modall extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
   
  showModal=()=>{
      this.refs.modal.open();
  }
  
  hideModal=()=>{
    this.refs.modal.close(); 
  }
  render() {
    buttons = ['make offer','add more size'];
    return (
      <Modal position={'center'} ref={'modal'} style={styles.modal}  >
        <View style={{width:'100%',flexDirection:'row',justifyContent:'flex-end',padding:10}}>
          <TouchableOpacity onPress={()=>this.hideModal()}>
            <AwesomeIcon name={'close'} size={20}/>
          </TouchableOpacity>
        </View>
        <Text style={{color:Colors.black}}>WANT ADDED</Text>
        <Image source={require('../assets/images/nike.png')} style={{height:'30%',width:150}}/>
        <Text style={{textAlign:'center',color:Colors.black,marginHorizontal:10}}>
          We'll notify you when your default size is listed or there is 
          a price drop.To get it at your own price,make an offer.
        </Text>
        <View style={{justifyContent:'center',marginBottom:15}}>
          {
            buttons.map((button,index)=>(
              <View key={index} >
                <TouchableOpacity onPress={()=>{ this.hideModal();button == buttons[1]?setPage('MoreSizes'):setPage('Offer')}}>
                  <View style={styles.button}>
                    <Text  style={{color:Colors.black,fontWeight:'500'}}>{button.toUpperCase()}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            ))
          }
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modal:{
    justifyContent:'space-between',
    alignItems:'center',
    alignItems:'center',
    height:'70%',
    width:'70%',
  },
  button:{
    backgroundColor:Colors.white,
    borderWidth: 1,
    borderColor: Colors.black,
    marginBottom: 10,
    paddingHorizontal: 10 ,
    height:35,
    width:200,
    alignItems:'center',
    justifyContent:'center'
  }
});