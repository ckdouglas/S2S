import React,{Component} from 'react'
import { View, Text, } from 'react-native'
import { Bars } from 'react-native-loader'

export default class Selling extends Component{

    constructor(props){
        super(props);
        this.state = {
        };
    }
    render(){
        return(
            <View>
                <Text>Selling</Text>
                <View>
                    <Bars size={10} color="#FDAAFF" />
                </View>
            </View> 
        )
    }
}