import { createSlice } from '@reduxjs/toolkit'

const ItemSlice = createSlice({
    name: 'item',
    initialState: {
        itemIS: 0
    },
    reducers:{
        selectItem(state, action) {
            state.itemIS = action.payload;
        },
    }
});

export const {selectItem} = ItemSlice.actions;
export default ItemSlice.reducer;