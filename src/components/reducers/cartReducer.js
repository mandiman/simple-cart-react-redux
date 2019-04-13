import { ADD_ITEM, REMOVE_ITEM, DECREASE_QUANTITY, INCREASE_QUANTITY } from '../actions/action-types/cart-actions'
import kopi from '../../assets/kopi.jpg'
import tchibo from '../../assets/tchibo.jpg'
const initState = {
    items: [
        {id:0,title:'Ground Wild Kopi Luwak', desc: "Ground Wild Kopi Luwak, the World’s Most Exclusive Coffee, Sustainably Sourced From Sumatra, Indonesia (Ground Coffee, 100gr)", price:99.5, img: kopi},
        {id:1,title:'Tchibo Gold Selection Coffee 100 g', desc: "100% pure coffee", price:11, img: tchibo}
    ],
    cartItems:[],
    total: 0

}
const cartReducer= (state = initState,action)=>{
    switch(action.type){
        case ADD_ITEM:
            let addedItem = state.items.find(item => item.id === action.id)
            let existed_item= state.cartItems.find(item => action.id === item.id)
            if(existed_item) {
                addedItem.quantity += 1 
                return{
                    ...state,
                    total: state.total + addedItem.price 
                }
            }
            else {
                addedItem.quantity = 1;
                let total = state.total + addedItem.price 
                return{
                    ...state,
                    cartItems: [...state.cartItems, addedItem],
                    total
                }
                
            }
        case REMOVE_ITEM:
            let removedItem = state.items.find(item => action.id === item.id)
            let cartItems= state.cartItems.filter(item => action.id !== item.id)
            let total = state.total - (removedItem.price * removedItem.quantity)
            return {
                ...state,
                cartItems,
                total
            }
        case DECREASE_QUANTITY:
            let decreasedItem = state.items.find(item => action.id === item.id)
            if (decreasedItem.quantity === 1) {
                let cartItems = state.cartItems.filter(item=>item.id !== action.id)
                let total = state.total - decreasedItem.price
                return {
                    ...state,
                    cartItems,
                    total
                }
            } else {
                decreasedItem.quantity -= 1
                let total = state.total - decreasedItem.price
                return {
                    ...state,
                    total
                }
            }
        case INCREASE_QUANTITY:
            let increasedItem = state.items.find(item => action.id === item.id)
            total = state.total + increasedItem.price
            increasedItem.quantity += 1
            return {
                ...state,
                total
            }

        default:
            return state;
    }
  }
  export default cartReducer;