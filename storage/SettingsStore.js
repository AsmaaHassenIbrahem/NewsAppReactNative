import { createSlice } from "@reduxjs/toolkit";

const SettingsSlice = createSlice({
    name: 'settings',
    initialState: {
        ids: '' 
    },
    reducers:{
        addTheme : (state, action) =>{
            state.ids = action.payload
        },

        addLanguage : (state, action) =>{
            state.ids = action.payload
        }
    }
});

export const addTheme = SettingsSlice.actions.addTheme;
export const addLanguage = SettingsSlice.actions.addLanguage;

export default SettingsSlice.reducer