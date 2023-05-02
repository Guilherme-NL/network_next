import { PostService } from "@/services/PostService";
import { transformApiResponseToAppData } from "@/utils/dataTransformation";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "./store";

export interface Post {
  id: number;
  username: string;
  created_datetime: string;
  title: string;
  content: string;
  timeAgo?: string;
}

export interface Data {
  count: number;
  next: string | null;
  previous: string | null;
  results: Post[];
}

export interface Posts {
  data: Data;
  status: "idle" | "pending" | "success" | "error";
  errorMessage?: string;
  limit: number;
}

interface ErrorMessage {
  errorMessage: string;
}

export interface AddPost {
  username: string;
  title: string;
  content: string;
}

export interface EditPost {
  id: number;
  post: { title: string; content: string };
}

const initialState: Posts = {
  data: { count: 0, next: null, previous: null, results: [] },
  status: "idle",
  limit: 20,
  errorMessage: "",
};

export const fetchPosts = createAsyncThunk<
  { data: Data },
  undefined,
  { rejectValue: ErrorMessage }
>("posts/fetchPosts", async (_, { rejectWithValue, getState }) => {
  const state = getState() as AppState;
  try {
    const response = await PostService.getPosts({
      parameters: `?limit=${state.posts.limit}&offset=0/`,
    });
    return { data: response.data };
  } catch (e) {
    return rejectWithValue({
      errorMessage: "There was an error fetching posts. Please try again.",
    });
  }
});

export const addPost = createAsyncThunk<
  { data: Data },
  AddPost,
  { rejectValue: ErrorMessage }
>("posts/addPost", async (post, { rejectWithValue }) => {
  try {
    await PostService.addPost(post);
    const response = await PostService.getPosts();
    return { data: response.data };
  } catch (err) {
    return rejectWithValue({
      errorMessage: "There was an error creating your post. Please try again.",
    });
  }
});

export const deletePost = createAsyncThunk<
  void,
  number,
  {
    rejectValue: ErrorMessage;
  }
>("posts/deletePost", async (id, { rejectWithValue, dispatch }) => {
  try {
    await PostService.deletePost(id);
    dispatch(fetchPosts());
  } catch (err) {
    return rejectWithValue({
      errorMessage: "There was an error deleting your post. Please try again.",
    });
  }
});

export const editPost = createAsyncThunk<
  void,
  EditPost,
  {
    rejectValue: ErrorMessage;
  }
>("posts/editPost", async (post, { rejectWithValue, dispatch, getState }) => {
  const state = getState() as AppState;
  try {
    await PostService.editPost(post);
    dispatch(fetchPosts());
  } catch (err) {
    return rejectWithValue({
      errorMessage: "There was an error editing your post. Please try again.",
    });
  }
});

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<Posts>) => {
      state.data = transformApiResponseToAppData(action.payload.data);
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
        state.data = transformApiResponseToAppData(action.payload.data);
      })
      .addCase(addPost.rejected, (state, action) => {
        state.status = "error";
        if (action.payload) {
          state.errorMessage = action.payload.errorMessage;
        }
      })
      .addCase(deletePost.fulfilled, (state) => {
        state.status = "success";
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.status = "error";
        if (action.payload) {
          state.errorMessage = action.payload.errorMessage;
        }
      })
      .addCase(editPost.fulfilled, (state) => {
        state.status = "success";
      })
      .addCase(editPost.rejected, (state, action) => {
        state.status = "error";
        if (action.payload) {
          state.errorMessage = action.payload.errorMessage;
        }
      })
      .addCase(fetchPosts.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "success";
        state.data = transformApiResponseToAppData(action.payload.data);
        state.limit = state.limit + 10;
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.status = "error";
      });
  },
});

export const { setPosts } = postSlice.actions;
export const selectPosts = (state: AppState) => state.posts;
export default postSlice;
