import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isMobile: false,
};

const isMobileSlice = createSlice({
    name: 'isMobile',
    initialState,
    reducers: {
        checkIsMobile: (state, { payload } ) => {
            state.isMobile = payload;
        }
    }
})

export default isMobileSlice.reducer;
export const { checkIsMobile } = isMobileSlice.actions;
