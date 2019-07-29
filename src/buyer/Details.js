import React, { Component } from 'react';
import { View, Text, Dimensions, Image, Animated, TouchableWithoutFeedback, ScrollView, StyleSheet, TouchableOpacity, } from 'react-native';
import {PagerDotIndicator,IndicatorViewPager} from 'rn-viewpager';
import SlidingUpPanel from 'rn-sliding-up-panel';
import Headroom from 'react-native-headroom';
import { Colors, AwesomeIcon, Styles, ModalWant} from '../bootstrap'; 
import { Connect,mapDispatchToProps,mapStateToProps } from '../Redux';
import ImagePicker from 'react-native-image-picker';
import { apiData, handleImageUpload } from '../functions';

const { height } = Dimensions.get("window");

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
        item:'',
        photo:''
    };
    this.openModal=this.openModal.bind(this);
  }

  componentWillMount(){
      this.setState({item:this.props.navigation.getParam('item')});
      
  }
 
  launchImagePicker(){
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true 
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.uri) {
        this.setState({photo:response});
        handleImageUpload(response,this.state.item._id);
      }
    });
  }
  

  _renderDotIndicator(){
    return <PagerDotIndicator pageCount={3}
    dotStyle={{backgroundColor:Colors.black}}
    selectedDotStyle={{backgroundColor:Colors.primary_blue}}/>
  }
  
  openModal=()=>{
    this.refs.modal.showModal()
  }
  menu_items = ['offer','buy new','used'];

  static defaultProps = {
    draggableRange: { top: height- 64, bottom:60 }
  };

  _draggedValue = new Animated.Value(0);

  render() {

    const { item } = this.state;
    const { navigation,price_by_size} = this.props;
    const {navigate,goBack} = navigation;

    setPage=(page)=>{
       navigate(page)
    }
    
    const header = ( 
        <View style={[Styles.container, Styles.header,Styles.bottom_border,{backgroundColor:Colors.white}]}>
            <TouchableOpacity onPress={()=>goBack()}>
                <AwesomeIcon name={'angle-left'} size={25} color={Colors.black} style={{marginLeft:10}}/>
            </TouchableOpacity>
            <View style={{flexDirection:'row',}}>
              <TouchableOpacity onPress={()=>{navigate('OwnItem')}}>
                <Text style={styles.header_text}>OWN</Text>   
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.openModal()}>
                <Text style={styles.header_text}>WANT</Text>
              </TouchableOpacity>
            </View>
        </View>
      );
  
    return (
      
      <View style={Styles.container} >
          {/* Product View */}
              <Headroom style={[styles.container]}  headerComponent={ header } ScrollableComponent={ScrollView}  headerHeight={60} scrollEventThrottle={ 50 }>
                 <View style={[Styles.container,Styles.center]}>
                  <View style={styles.slider}>
                      <IndicatorViewPager style={{height:250}} indicator={this._renderDotIndicator()}>
                        {
                          item.images.map((image,index)=>(
                            <View style={{height:250,width:'100%'}}>
                                <Image source={{uri:image}} style={{flex:1,height:null,width:null,resizeMode:'cover'}}/> 
                            </View>
                          ))
                        }
                          
                    </IndicatorViewPager> 
                    </View>
                    <View style={{marginTop:25}}>
                      <Text style={{fontSize:24,textAlign:'center',color:Colors.black}}>{item.name}{'\n'}{item.nickname}</Text>
                      <Text style={{textAlign:'center',paddingHorizontal:20,paddingTop:10,lineHeight:25,fontFamily:'Arial'}}> 
                          {item.story}
                       </Text>
                    </View>
                    <Text style={{borderBottomColor:'grey',borderBottomWidth:2}}>READ MORE</Text>  
                  <View style={{flex:1,width:'90%'}}>
                    <View style={[styles.item_style,]}>
                      <Text> SKU AT3375 200</Text>
                      <View style={styles.item_style}>
                        <AwesomeIcon name={'upload'} size={20} color={Colors.black} style={{marginRight:15}}/>
                        <Text style={{fontSize:12,width:60,paddingVertical:5,textAlign:'center', borderWidth:1,borderColor:Colors.black,color:Colors.black}} >SELL</Text>
                      </View>
                    </View>
                  {
                    Object.keys(item).map((label,index)=>{
                      if ( !(label =='_id') && !(label=='images') && !(label=='brand_id') && !(label=='story') && !(label=='prices'))  {
                        return(
                        <View key={index} style={[styles.item_style,Styles.bottom_border]}>
                        <Text>{label}</Text>
                        <Text style={{color:Colors.black}}>{ item[label]}</Text> 
                        </View>
                        )
                      }
                    })
                  }
                <View style={Styles.bottom_border}>
                  <Text style={{marginTop:15,marginBottom:15}}>RELATED SEARCHES</Text>
                  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <Image source={require('./../assets/images/j72.png')} style={{ resizeMode:'contain',height:200,width:200}}/>
                    <Image source={require('./../assets/images/j73.png')} style={{ resizeMode:'contain',height:200,width:200}}/>
                    <Image source={require('./../assets/images/j71.png')} style={{ resizeMode:'contain',height:200,width:200}}/>
                    <Image source={require('./../assets/images/j72.png')} style={{ resizeMode:'contain',height:200,width:200}}/>
                    <Image source={require('./../assets/images/j72.png')} style={{ resizeMode:'contain',height:200,width:200}}/>
                    <Image source={require('./../assets/images/j72.png')} style={{ resizeMode:'contain',height:200,width:200}}/>
                  </ScrollView>
                </View>

                <View style={{paddingTop:30,}}> 
                <View style={{alignItems:'center'}}> 
                  <Text style={{color:Colors.black}}>ONFEET</Text>
                  <Text style={{color:Colors.black,paddingTop:15,fontSize:15}}>Show off how you wear yours</Text>
                </View>
                  <TouchableOpacity onPress={()=>this.launchImagePicker()}>
                    <View style={[styles.button]}>
                      <Text>ADD PHOTO</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>

                 </View>
              </Headroom>
              <ModalWant ref={'modal'}/>
          {/* Slide Up View */}
          <SlidingUpPanel ref= {c=> this._panel= c} draggableRange = {this.props.draggableRange} snappingPoints={[360]} height={height}>
              <View style={[Styles.container,{backgroundColor: 'rgba(52, 52, 52, 0.4)'}]}>
                  <View style={styles.menu}>
                      { 
                        this.menu_items.map((menu_item,index)=>(
                          <TouchableWithoutFeedback key={index}>
                            <View style={Styles.center}>
                                {index == 1? <AwesomeIcon name={'angle-down'} color={Colors.white} size={30}/>:<Text/>}  
                                <Text style={{color:'white'}}>{menu_item.toUpperCase()}</Text>
                            </View>
                          </TouchableWithoutFeedback>
                        ))
                      }
                   </View>
                   <View style={[styles.container,{paddingHorizontal:40}]}>
                      <ScrollView style={{flexGrow:1}} showsVerticalScrollIndicator={false} >
                        {
                          item.prices.map((price,index)=>(
                            <View style={{flexDirection:'row',width:'100%',borderBottomColor:Colors.grey,borderBottomWidth:1,height:60,width:'100%',alignItems:'center' ,justifyContent:'center'}} >
                            <TouchableOpacity onPress={()=>navigate('CheckOut',{page:'check out'})}>
                              <View style={{flexDirection:'row',width:'100%',height:60,width:120,alignItems:'center' ,justifyContent:'space-between'}}>
                              <Text style={{fontSize:25,color:Colors.white}}>{Object.keys(price)[0]}</Text>
                              <Text style={{fontSize:25,color:Colors.white}}> ${price[(Object.keys(price)[0]).toString()]}</Text>
                              </View>
                            </TouchableOpacity>
                            </View>
                          ))
                        }
                      </ScrollView>
                    </View>
              </View>
          </SlidingUpPanel>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    header: {
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: Colors.border_color,
      backgroundColor:Colors.white
    },
    header_text:{
      fontSize:12,
      padding: 5,
      marginHorizontal: 5,
      width:60,
      borderColor: Colors.black,
      borderWidth:1,
      textAlign:'center',
      color:Colors.black
    },
    slider:{
      height:250,
      width:'90%',  
      borderBottomColor:Colors.black,
      borderBottomWidth:1,
    },
    item_style:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      height:60,
    },
    button:{
      height:50,
      marginTop:15,
      marginHorizontal:20,
      alignItems:'center',
      justifyContent:'center',
      borderColor:Colors.black,
      marginBottom: 70,
      borderWidth:1
    },
    menu: {
      height: 60,
      backgroundColor:'rgba(52, 52, 52, 0.4)',
      justifyContent: "flex-end",
      padding: 5,
      flexDirection: 'row',
      justifyContent:'space-around',
      alignItems: 'center',
  
    },
  });
  export default Connect(mapStateToProps,mapDispatchToProps)(Details)