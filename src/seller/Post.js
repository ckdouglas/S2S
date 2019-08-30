import React, {Component} from 'react';
import {} from 'react-native';
import { Connect, mapDispatchToProps, mapStateToProps } from '../Redux'
class Post extends Component{
    constructor(props){
        super(props)
        this.state ={
            
        }
    }
    render(){
       const { navigation, user }= this.props;
       const { navigate, goBack} = this.navigate; 
        return(
            <View>
                
            </View>
        )
    }
}

export default Connect(mapDispatchToProps, mapStateToProps)(Post)