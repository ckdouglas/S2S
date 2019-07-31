import React, { Component } from 'react';
import { View, Text,  StyleSheet,TextInput,ScrollView,Dimensions,FlatList} from 'react-native';
import { SearchBar } from 'react-native-elements';
import MasonryList from 'react-native-masonry-list';
import {  Colors } from '../bootstrap';
import {apiData} from '../functions';
import {Connect,mapDispatchToProps,mapStateToProps} from '../Redux'; 

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search_key:'' ,
      wears_data:[]

    };
  } 
 
  updateSearch=(search_key)=>{
    this.setState({search_key:search_key})
  }
  render() {
    
    const {search_key,wears_data} = this.state;
    const { navigation,wears } = this.props;
    const { navigate } = navigation;

    wears.forEach(element => {
      wears_data.push({
        shoesId:element.shoesId,
        uri:element.imageUrl,
      })
    });

    return (
      <View style={{flex:1,backgroundColor:Colors.light_grey}}>
          <SearchBar
            placeholder='Search'
            containerStyle={{backgroundColor:Colors.light_grey,borderBottomWidth:0}}
            inputContainerStyle={{backgroundColor:Colors.white,height:40}}
            onChangeText={this.updateSearch}
            value={search_key} 
          />
        <ScrollView contentContainerStyle={{flexGrow:1}} showsVerticalScrollIndicator={false}>
         <View style={styles.image_container}>
         <MasonryList
            sorted={true}
            images={wears_data}
            columns={2}
            onPressImage={(data)=>{navigate('ViewWear',{data:data})}}
        />
         </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    image_container:{
      flex:1,
      width:'100%',
      flexDirection:'row',
      flexGrow:1,
      flexWrap: 'wrap',
    }
});

export default Connect(mapStateToProps,mapDispatchToProps)(Search);
