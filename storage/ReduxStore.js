import { configureStore } from "@reduxjs/toolkit";

import settingsReducer from "./SettingsStore"
export const ReduxStore = configureStore({
    reducer: {
        settingsData: settingsReducer
    }
});