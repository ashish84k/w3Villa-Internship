import {createSlice , nanoid} from '@reduxjs/toolkit'

const initialState = [];

const CartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
       addCart : (state , action)=>{
        state.push(action.payload);
       }, 
       removeCart : (state , action)=>{
        let data = state.filter(item=>item.id != action.payload.id)
        return data;
       }, 
    //    updateCart : (state , action)=>{}, 
    }
});

export const { addCart, removeCart, updateCart } = CartSlice.actions;
export default CartSlice.reducer;


