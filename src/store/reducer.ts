import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../types/product';
import { Products } from '../mocks/products';

type ReducerInititalState = {
    products: Product[],
    machineBalance: number,
    clientBalance: number,
    invenory: any
}

const initialState: ReducerInititalState = {
    products: Products,
    machineBalance: 0,
    clientBalance: 1000,
    invenory: []
}
export const mainReducerSlice = createSlice({
    name: "main-reducer",
    initialState,
    reducers: {
        depositMoney: (state, action) => {
            if (state.clientBalance >= action.payload) {
                state.clientBalance -= action.payload
                state.machineBalance += action.payload
            }
        },
        withdrawMoney: (state, action) => {
            if (state.machineBalance >= action.payload) {
                state.machineBalance -= action.payload;
                state.clientBalance += action.payload;
            }
        },
        buyItem: (state, action) => {
            const item = state.products.find(el => el.id === (action.payload + 1))
            if (item && item.price <= state.machineBalance) {
                state.machineBalance -= item.price;
                state.products[item.id - 2].quantity -= 1;
                state.invenory.push(state.products[item.id - 2]);

            }
        }
    }
})


export const {
    depositMoney,
    withdrawMoney,
    buyItem
} = mainReducerSlice.actions;