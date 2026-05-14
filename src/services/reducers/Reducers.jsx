import { ADD_TO_CART } from "../Constants";

const initialState = {
    cardData: ['vipul'],
    name: 'vipul',
    age: 55,
    wishList: [],
    address: {
        pin: 440034,
        flatNo: 301
    }
}

export default function cardItems(state=initialState, action){
    switch(action.type){
        case ADD_TO_CART:
            return {
                ...state,
                cardData: action.data
            }
            break;
            default:
                return state
    }
}