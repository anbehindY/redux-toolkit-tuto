import { configureStore } from '@reduxjs/toolkit';
import './features/cart/cartSlice';
import cartReducer from './features/cart/cartSlice';

export const store = configureStore({
        reducer: {
            cart: cartReducer,
        },
    });