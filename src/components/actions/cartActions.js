import { ADD_ITEM, REMOVE_ITEM, DECREASE_QUANTITY, INCREASE_QUANTITY } from './action-types/cart-actions'

export const addItem = (id) => {
    return{
        type: ADD_ITEM,
        id
    }
}
export const removeItem = (id) => {
    return{
        type: REMOVE_ITEM,
        id
    }
}
export const decQuan = (id) => {
    return{
        type: DECREASE_QUANTITY,
        id
    }
}
export const incQuan = (id) => {
    return{
        type: INCREASE_QUANTITY,
        id
    }
}