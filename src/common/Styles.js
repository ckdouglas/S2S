import { StyleSheet } from 'react-native';
import {Colors}  from './Colors'; 

export default StyleSheet.create({

    container:{
        flex: 1,
    },
    header:{
        height:60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        height:40, 
    },
    header_title:{
        fontSize:15, 
        fontWeight: '500',
        color:Colors.black
    },
  nav:{
    height:50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: Colors.border_color,
    borderBottomWidth: 1,
    paddingHorizontal:10
  },
    btn_f:{
        backgroundColor:Colors.facebook_blue,
      },
      btn_g:{
        backgroundColor:Colors.red,
      },
    auth_input:{
        marginTop:5,
        fontSize:15,
        backgroundColor:Colors.light_grey,
        borderRadius:5,
        padding: 12,
    },
    footer:{
        
    },
    primary_button:{
        backgroundColor:Colors.btn_color,
        alignItems:'center',
        justifyContent:'center',
        flexDirection: 'row',
        borderRadius: 30,
        height:50,
        marginVertical: 2,
    },
    text:{
        color:Colors.black,
        textAlign:'center',
    },
    bottom_border:{
        borderBottomColor:'#F2F2F2',
        borderBottomWidth: 1,
    },
    link:{
        fontWeight:'400',
        color:Colors.twitter_blue,
    },
    center:{
        alignItems:'center',
        justifyContent:'center'
    },
    border:{
        borderColor:Colors.black,
        borderWidth:1,
    }
})