import { createSlice } from '@reduxjs/toolkit';
import { storeData } from '../database/data';

const initialState = {
    products: storeData,
    amount: 0,
    total: 0
};

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        increaseAmount: (state, { payload }) => {
            const item = state.products.find(item => item.name === payload.name);
            item.amount++;
        },
        decreaseAmount: (state, { payload }) => {
            const item = state.products.find(item => item.name === payload.name);
            item.amount--;
        },
        removeItem: (state, { payload }) => {
            state.products = state.products.filter(item => item.name !== payload.name);
        },
        updateTotal: (state, { payload }) => {
            let amount = 0;
            let totalPrice = 0;
            state.products.forEach(item => {
                amount = item.amount + amount
                totalPrice = item.amount * item.price
            })
            state.amount = amount;
            state.total = totalPrice;
        }
    }
});

export const { increaseAmount, decreaseAmount, removeItem , updateTotal} = basketSlice.actions;

export default basketSlice.reducer;
