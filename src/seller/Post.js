import React, {Component} from 'react';
import { View, Text, TextInput,TouchableOpacity, Image, ScrollView, FlatList,StyleSheet,Dimensions} from 'react-native';
import { Transition,FluidNavigator } from 'react-navigation-fluid-transitions';
import { Connect, mapDispatchToProps, mapStateToProps } from '../Redux';
import {Colors, AwesomeIcon, IonicIcon, Styles} from '../bootstrap'

numColumns=2

lables = ['brand','name','designer','nickname','silhoulette','release date','colors','size','price','story']

 images=[
        {src:"http://192.168.1.101:3000/images/kisspng-air-jordan-shoe-mars-blackmon-nike-teal-michael-jordan-5ac726f7b96173.4048697815230010797593.png"}, 
        {src:"http://192.168.1.101:3000/images/kisspng-air-jordan-shoe-mars-blackmon-nike-teal-michael-jordan-5ac726f7b96173.4048697815230010797593.png"}, 
        {src:"http://192.168.1.101:3000/images/kisspng-air-jordan-shoe-mars-blackmon-nike-teal-michael-jordan-5ac726f7b96173.4048697815230010797593.png"},
        {src:"http://192.168.1.101:3000/images/kisspng-air-jordan-shoe-mars-blackmon-nike-teal-michael-jordan-5ac726f7b96173.4048697815230010797593.png"}, 
        {src:"http://192.168.1.101:3000/images/kisspng-air-jordan-shoe-mars-blackmon-nike-teal-michael-jordan-5ac726f7b96173.4048697815230010797593.png"}, 
        {src:"http://192.168.1.101:3000/images/kisspng-air-jordan-shoe-mars-blackmon-nike-teal-michael-jordan-5ac726f7b96173.4048697815230010797593.png"},
]

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        margin: 0.5,
        flex:1,
        height: (Dimensions.get('window').width / numColumns)*0.8,
        flexDirection: 'column',
        justifyContent:'space-between'
      },
      image:{
        height:100,
        width:160,
      },
      itemInvisible: {
        backgroundColor: 'transparent',
      },
})



class Screen1 extends Component{

    renderItem = ({ item, index}) => { 
        if (item.empty === true) {
            return <View style={[styles.item, styles.itemInvisible]} />;
        }
        return (
            <View style={styles.item} >
                <View style={{alignItems:'flex-end',marginRight:15}}>
                <TouchableOpacity>
                    <IonicIcon name={'close'} size={20} color={Colors.black}/>
                </TouchableOpacity>
                </View>
                <Image style={styles.image} resizeMode={'contain'} source={{uri:item.src}}></Image>
                <View/>
            </View>
        
    )};

    render(){
        return(
            <View style={[Styles.container,{flexGrow:1,flexDirection:'column',backgroundColor:Colors.white}]}>
                <View style={[Styles.nav,{marginHorizontal:10}]}>
                    <TouchableOpacity>
                        <IonicIcon name={'close'} size={25} color={Colors.black}/>
                    </TouchableOpacity>
                    <Text>SELL</Text>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('screen2')}>
                        {/* check for completeness then show the icon */}
                        <AwesomeIcon name={'check'} size={30} color={Colors.green}/>                
                    </TouchableOpacity>
                </View>

                <Transition appear='left'>
                        <Text style={[Styles.text,{fontSize:20,marginTop:15}]}>Select or Capture {'\n'}product you want to post.</Text>
                </Transition>

                <Transition appear='flip'>
                    <View style={{marginHorizontal:30}}>
                        <TouchableOpacity style={[Styles.border,{marginVertical:15}]}>
                            <View style={[{height:35,alignItems:'center',justifyContent:'center'},]}>
                                <Text style={{color:Colors.green}}>Take A Photo</Text>
                            </View>
                        </TouchableOpacity>

                        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginBottom:15}}>
                            <View style={[Styles.bottom_border,{width:'45%'}]}/>
                                <Text style={{paddingHorizontal:10}}> OR </Text>
                            <View style={[Styles.bottom_border,{width:'45%'}]}/>
                        </View>
                    </View>
                </Transition>

                <Transition appear='bottom'>
                    <View style={{alignItems:'center',justifyContent:'center'}}>
                            <Text style={[Styles.text,{fontSize:16}]}>Select Image from the gallery</Text>
                    </View>
                </Transition>

                {/* flatlist for images */}
                <Transition appear="bottom">
                        <ScrollView style={{marginTop:20}} showsVerticalScrollIndicator={false}>
                                <FlatList
                                    data={images} 
                                    style={[Styles.container,{ backgroundColor:'#fff'}]}
                                    renderItem={this.renderItem}
                                    numColumns={numColumns}
                                    keyExtractor={(item,index)=>index.toString()}
                                    />
                            </ScrollView>
                </Transition>
        </View>
        )
    }
}

class Screen2 extends Component{

    details = [
        {label:'brand',value:''},
        {label:'name',value:''},
        {label:'designer',value:''},
        {label:'nickname',value:''},
        {label:'silhoulette',value:''},
        {label:'air:',value:''},
        {label:'release_date',value:''},
        {label:'size',value:''}
    ]

    constructor(props){
        super(props)
        this.state={
            details:this.details,
        }
    }

    render(){

        const{details} = this.state;
        return(
            <ScrollView contentContainerStyle={{flexGrow:1}} showsVerticalScrollIndicator={false}>
            <View style={Styles.container}>
                <View style={[Styles.nav,{marginHorizontal:10}]}>
                    <TouchableOpacity onPress={()=>props.navigation.goBack()}>
                        <IonicIcon name={'arrow-back'} size={25} color={Colors.black}/>
                    </TouchableOpacity>
                    <Text style={[Colors.text,{color:Colors.black,fontSize:18}]}>Details</Text>
                    <Text/>
                </View>
                <View style={{flex:1}}>
                    <View style={{height:50,marginTop:20,width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                        {
                            images.map((image,index)=>(
                            <View style={{width:'16%',borderRadius:5,backgroundColor:Colors.light_grey,marginHorizontal:2}}>
                                <Image source={{uri:images[0].src}} style={{flex:1,height:null,width:null,resizeMode:'contain'}}/> 
                            </View>
                            ))
                        }
                    </View>
                    <View>
                            {
                            details.map((det,index)=>{
                                return(
                                    <View key={index}>
                                        <Text>{det.label}</Text>
                                        <TextInput placeholder={'Type here ...'}/>
                                    </View>
                                )
                            }) 
                            }
                        </View>
                </View>
            </View>
        </ScrollView>
        )
    }
}


const Navigator = FluidNavigator({
    // screen1: { screen: Screen1 },
    screen2: { screen: Screen2 },
},
{
    style: { backgroundColor: Colors.white },
    defaultNavigationOptions: {
      gesturesEnabled: true,
    },
});

class Post extends Component{
    static router = Navigator.router;

    render(){
    const {items,navigation,user} = this.props;
       return(
           <Navigator navigation={navigation}/>
        );
    }
}

export default Connect(mapDispatchToProps, mapStateToProps)(Post)