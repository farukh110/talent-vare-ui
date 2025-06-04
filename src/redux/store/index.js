// store/index.js
import { configureStore } from "@reduxjs/toolkit";
import jobSearchReducer from '@/redux/api/jobSearch/jobSearchSlice';
import sidebarReducer from '@/redux/api/sidebar/sidebarSlice';


export const store = configureStore({
    reducer: {
        jobSearch: jobSearchReducer,
        sidebar: sidebarReducer,
    },
});
