import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import blogReducer from '../features/blogs/blogSlice'
import isMobileReducer from '../features/isMobileSlice/isMobileSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        blogs: blogReducer,
        isMobile: isMobileReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
