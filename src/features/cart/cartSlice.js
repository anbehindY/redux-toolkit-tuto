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
});

export default cartSlice.reducer;
