import * as actionType from '../constants/cartConstants'

export const cartReducer = (state = {cartItem: [] }, action)=> {
    switch(action.type) {
        case actionTypes.ADD_TO_CART:
            const item = action.payload;
            const existItem = state.cartItems.find((p)=> p.product === item.product)

            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItem.map((x)=> x.product === existItem.product ? item:x )
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item],
                }
            }
        case actionTypes,REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter((x)=> x.product !== action.payload)
            }
        
        default:
            return state;
    }
}