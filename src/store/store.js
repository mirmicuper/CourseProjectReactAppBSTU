import { configureStore } from '@reduxjs/toolkit';
import LangReduser from '../features/LangSlice';
import ItemReduser from '../features/ItemSlice'

export default configureStore({
    reducer: {
        languages: LangReduser,
        items: ItemReduser
    }
});