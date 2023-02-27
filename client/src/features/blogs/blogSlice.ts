import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import blogService from './blogService';
import { RootState } from '../../app/store';
import { BlogType } from '../../types';

const initialState = {
    blogs: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
};

export const createBlog = createAsyncThunk<BlogType, string, {state: RootState}>(
    'blogs/create',
    async (blogData, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token;
            return await blogService.createBlog(blogData, token);
        } catch (error: any) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const getBlogs = createAsyncThunk(
    'blogs/getAll',
    async (_, thunkAPI) => {
        try {
            return await blogService.getBlogs();
        } catch (error: any) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

// Delete user blog
export const deleteBlog = createAsyncThunk<BlogType, string, { state: RootState}>(
    'blogs/delete',
    async (blogId, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token;
            return await blogService.deleteBlog(blogId, token);
        } catch (error : any) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(createBlog.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createBlog.fulfilled, (state: any, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.blogs.push(action.payload);
            })
            .addCase(createBlog.rejected, (state: any, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(getBlogs.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getBlogs.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.blogs = action.payload;
            })
            .addCase(getBlogs.rejected, (state: any, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(deleteBlog.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteBlog.fulfilled, (state: any, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.blogs = state.blogs.filter(
                    (blog: BlogType) => blog._id !== action.payload._id
                );
            })
            .addCase(deleteBlog.rejected, (state: any, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            });
    },
});

export const { reset } = blogSlice.actions;
export default blogSlice.reducer;
