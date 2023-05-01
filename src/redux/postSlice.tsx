import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import axios from "axios";
import { AppState } from "./store";

interface Post {
  id: number;
  username: string;
  created_datetime: string;
  title: string;
  content: string;
}

interface Posts {
  data: {
    count: number;
    next: string | null;
    previous: string | null;
    results: Post[];
  };
  status: "idle" | "pending" | "success" | "error";
}

const initialState: Posts = {
  data: { count: 0, next: null, previous: null, results: [] },
  status: "idle",
};

export const addPost = createAsyncThunk(
  "posts/addPost",
  async (post, { rejectWithValue }) => {
    try {
      const url = "https://dev.codeleap.co.uk/careers/";

      await axios.post(url, post);
      const response = await axios.get(url);

      return { data: response.data };
    } catch (err) {
      return rejectWithValue("Error to add new post");
    }
  }
);

// export const deletePost = createAsyncThunk<void, number | null>(
//   "posts/deletePost",
//   async (id, { rejectWithValue, dispatch, getState }) => {
//     const state = getState() as AppState;
//     try {
//       const url = "https://dev.codeleap.co.uk/careers/";
//       console.log(state, "state");
//       await fetch(url + `${id}`, { method: 'DELETE' });
//       await dispatch(fetchPosts());
//     } catch (err) {
//       return rejectWithValue("Error to add new post");
//     }
//   }
// );

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (limit: any) => {
    const response = await axios.get(
      `https://dev.codeleap.co.uk/careers/?limit=${limit}&offset=0/`
    );
    console.log({ data: response.data });
    return { data: response.data };
  }
);

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<Posts>) => {
      state.data = action.payload.data;
      state.status = action.payload.status;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(HYDRATE, (state, action) => {
        //@ts-ignore
        if (!action.payload.posts.data) {
          return state;
        }
        //@ts-ignore
        state.data = action.payload.posts.data;
        //@ts-ignore
        state.status = action.payload.posts.status;
      })
      .addCase(addPost.pending, (state) => {
        state.status = "pending";
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload.data;
      })
      .addCase(addPost.rejected, (state) => {
        state.status = "error";
      })
      .addCase(fetchPosts.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload.data;
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.status = "error";
      });
  },
});

export const { setPosts } = postSlice.actions;
export const selectPosts = (state: AppState) => state.posts;
export default postSlice;
