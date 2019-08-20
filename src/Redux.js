import {connect} from 'react-redux';

var initialState={
    count:0,
    shoes:[],
    user:0,
    price_by_size:{},
    wears:[],
    check_info:false,
    check_raddress:false,
    check_101:false,
    check_linked:false
};

export const reducer=( state = initialState, action)=>{
    switch(action.type){
        case 'setUser':
            return {...state, user:action.data}
        case 'setShoes':
             return {...state,shoes:action.data}
        case 'setPrices':
            return{...state,price_by_size:action.data}
        case 'setWears':
            return {...state,wears:action.data}
        case 'setInfo':
            return {...state,check_info:action.data}
        case 'setRAddress':
            return {...state,check_raddress:action.action}
        case 'set101':
            return {...state,check_101:action.data}
        case 'setLinked':
            return {...state,check_linked:action.data}
    }
    return state;
}

export function mapStateToProps(state){
    return {
        count:state.count,
        items:state.shoes,
        user:state.user,
        price_by_size:state.price_by_size,
        wears:state.wears,
        check_info:state.check_info,
        check_raddress:state.check_raddress,
        check_101:state.check_101,
        check_101:state.check_linked
    } 
}

export function mapDispatchToProps(dispatch){
    return{
        setUser: (user)=>dispatch({type:'setUser', data:user}),
        setShoes: (shoes)=>dispatch({type:'setShoes',data:shoes}),
        setPrices:(prices)=>dispatch({type:'setPrices',data:prices}),
        setWears:(wears)=>dispatch({type:'setWears',data:wears}),
        setInfo:(val)=>dispatch({type:'setInfo',data:val}),
        setRAddress:(val)=>dispatch({type:'setRAddress',data:val}),
        set101:(val)=>dispatch({type:'set101',data:val}),
        setLinked:(val)=>dispatch({type:'setLinked',data:val}),
    }
}

export const Connect = connect;
