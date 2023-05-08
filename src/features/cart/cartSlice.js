import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../cartItems';

const initialState = {
    cartItems: cartItems,
    amount: 4,
    total: 0,
    loading: true,
};

const cartSlice = createSlice( {
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
        },
        removeItems: (state, {payload}) => {
            const itemId = payload;
            state.cartItems = state.cartItems.filter((item) => 
                item.id !== itemId);
        },
        increase: ( state, { payload }) => {
            const cartItem = state.cartItems.find((item) =>
                item.id === payload.id);
                cartItem.amount = cartItem.amount +1;
        },
        decrease: ( state, { payload }) => {
            const cartItem = state.cartItems.find((item) =>
                item.id === payload.id);
                if(cartItem.amount > 1){
                    cartItem.amount = cartItem.amount -1;
                }
        },
        calculateTotal: (state) => {
           let amount = 0;
           let total = 0;
           state.cartItems.forEach((item)=> {
            amount += item.amount;
            total += item.amount * item.price;
           })  
           state.amount = amount;
           state.total = total;
        }
    },
});

console.log(cartSlice)
export const { clearCart,removeItems, increase, decrease, calculateTotal } = cartSlice.actions;
export default cartSlice.reducer;
