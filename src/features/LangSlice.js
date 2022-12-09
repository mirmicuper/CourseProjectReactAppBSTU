import { createSlice } from '@reduxjs/toolkit'


const LangSlice = createSlice({
    name: 'language',
    initialState: {
        langIS: ''
    },
    reducers:{
        selectLanguage(state, action) {
            state.langIS = action.payload;
        }
    }
});

export const {selectLanguage} = LangSlice.actions;
export default LangSlice.reducer;