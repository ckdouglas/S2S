import {connect} from 'react-redux';
import {wears} from './mock_data'

var initialState={
    count:0,
    shoes:[],
    user:0,
    price_by_size:{},
    wears,
};

export const reducer=( state = initialState, action)=>{
    switch(action.type){
        case 'setUser':
            return {...state, user:action.data}
        case 'setShoes':
             return {...state,shoes:action.data}
        case 'setPrices':
            return{...state,price_by_size:action.data}
    }
    return state;
}

export function mapStateToProps(state){
    return {
        count:state.count,
        items:state.shoes,
        user:state.user,
        price_by_size:state.price_by_size,
        wears:wears,
    } 
}

export function mapDispatchToProps(dispatch){
    return{
        setUser: (user)=>dispatch({type:'setUser', data:user}),
        setShoes: (shoes)=>dispatch({type:'setShoes',data:shoes}),
        setPrices:(prices)=>dispatch({type:'setPrices',data:prices})
    }
}

export const Connect = connect;
