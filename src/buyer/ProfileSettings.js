import React, { Component } from 'react';
import { View, Text,StyleSheet,ScrollView,TouchableOpacity} from 'react-native';
import { Avatar } from 'react-native-elements';
import { Styles,AwesomeIcon,Colors } from '../bootstrap';
import { titleCase } from '../functions';
import { deleteUsers } from '../Realm';
import {Connect,mapDispatchToProps,mapStateToProps} from '../Redux';


class ProfileSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  
  render() {
      const {user, navigation,setUser} = this.props;
    return (
        <ScrollView style={styles.scroll}>
        <View style={[Styles.header,Styles.bottom_border,]}>
          <Text/>
          <Text style={Styles.header_title}>Account Settings</Text>
          <Text/>
        </View>

        <View style={styles.userRow}>
          
          <View style={styles.userImage}>
            <Avatar
              rounded
              size="medium"
              source={{
                uri: user.photoUrl 
              }}
            />
          </View>
          <View>
            <Text style={[{fontSize: 16,color:Colors.black,fontWeight:'500'}]}>{titleCase(user.username)}</Text>
            <Text style={{ color: 'gray', fontSize: 16,}}>
              {user.email} 
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
    scroll: {
      backgroundColor: 'white',
    },
    userRow: {
      alignItems: 'center',
      flexDirection: 'row',
      paddingBottom: 8,
      paddingLeft: 15,
      paddingRight: 15,
      paddingTop: 6,
    },
    userImage: {
      marginRight: 12,
    },
    listItemContainer: {
      height: 55,
      borderWidth: 0.5,
      borderColor: '#ECECEC',
    },
  })
  export default Connect(mapStateToProps,mapDispatchToProps)(ProfileSettings)
