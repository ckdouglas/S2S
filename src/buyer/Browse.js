import React from 'react';
import { ScrollView,StyleSheet, Text, View, FlatList, Dimensions,Image,TouchableWithoutFeedback,TouchableOpacity } from 'react-native';
import { Colors, Styles } from '../bootstrap';
import { IndicatorViewPager, PagerTitleIndicator,} from 'rn-viewpager';
const windowWidth = Dimensions.get('window').width;
import {Connect,mapDispatchToProps,mapStateToProps} from '../Redux'; 

const numColumns = 2;

class Browse extends React.Component {
 
  constructor(props) {
    super(props)
  
    this.state = {
      currentTab:''
    };
  };
  
  changeTab=(tab)=>{
    this.setState({currentTab:tab})
  }

  renderItem = ({ item, index}) => { 
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return (
        <View style={styles.item} >
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Details',{item:item})}>
          <View style={{paddingTop:20,paddingRight:20}}>
          <Text style={[styles.itemText,{textAlign:'right',fontSize:12}]}>US${item.price}</Text>
          </View>
        <View>
          <Image style={styles.image} source={{ uri:item.images[0]}}></Image>
        </View>

        <View style={{alignItems:'center',paddingBottom:20}}>
          <Text style={[styles.itemText,{textAlign:'center',paddingHorizontal:25,fontSize:12}]}>{item.name} {item.designer} '{item.nickname}'</Text>
        </View>
       </TouchableOpacity>
      </View>
    
    );
  };

  _renderTitleIndicator() {
    return <PagerTitleIndicator trackScroll={true} 
                                style={styles.nav_container}
                                itemStyle={{width:windowWidth/3.5}}
                                itemTextStyle={styles.tab_text}
                                selectedItemStyle={{width:windowWidth/3.5}}
                                selectedItemTextStyle={[styles.tab_text,{color:Colors.black}]}
                                selectedBorderStyle={styles.selectedBorderStyle} 
                                titles={['BUY NOW', 'UNDER RETAIL', 'TRENDING','CALENDER']} />;
}
  render() {
    const {items,} = this.props;
    return (
           <IndicatorViewPager style={{flex:1,flexDirection: 'column-reverse'}} indicator={this._renderTitleIndicator()}>
                
              <View style={{flex:1}}>
                  <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>
                  <FlatList
                      data={items} 
                      style={[Styles.container,{ backgroundColor:'#f2f2f2'}]}
                      renderItem={this.renderItem}
                      numColumns={numColumns}
                      keyExtractor={(item,index)=>index.toString()}
                      />
                  </ScrollView>
              </View>
              
              <View style={Styles.center}>
                <Text> NOT  AVAILABLE </Text>
              </View>
              
              <View style={Styles.center}>
                <Text> NOT  AVAILABLE</Text>
              </View>

              <View style={Styles.center}>
                <Text> NOT  AVAILABLE</Text>
              </View>
            </IndicatorViewPager>
    );
  }
}

const styles = StyleSheet.create({
  nav_container:{
    backgroundColor:Colors.white,
    width:windowWidth,
  },
  item: {
    backgroundColor: '#FFF',
    flex: 1,
    margin: 0.5,
    height: (Dimensions.get('window').width / numColumns)*1.1,
    flexDirection: 'column',
    justifyContent:'space-between',
  }, 
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  itemText: {
    color: '#000',
    justifyContent: 'flex-end',
    textAlign:'right',
  },
  image:{
    height:100,
    width:160,
  },
  header:{
    height:50,
    borderBottomColor: Colors.border_color,
    borderBottomWidth: 1,
    flexDirection:'row',
    width:'100%',
    justifyContent:'space-around'
  },
  current_tab:{
    borderBottomWidth:2,
    borderBottomColor:Colors.black
  },
  selectedBorderStyle: {
    height: 2,
    backgroundColor: Colors.black,
    width:100
},
tab_text:{
  fontWeight: '500',
  fontSize:12,
},
});

export default Connect(mapStateToProps,mapDispatchToProps)(Browse)
