import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://uqkalhfizudhmddlmppq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxa2FsaGZpenVkaG1kZGxtcHBxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQzNDM5OTcsImV4cCI6MjAzOTkxOTk5N30.c-uRM8ZKnFMi-EfuB7xVGT15ROmEuDB8jltyrnPzv4E";
const supabase = createClient(supabaseUrl, supabaseKey);

export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async () => {
  const { data, error } = await supabase.from("blogsInfo").select("*");
  if (error) throw error;
  return data;
});

export const fetchBlogById = createAsyncThunk(
  "blogs/fetchBlogById",
  async (id) => {
    const { data, error } = await supabase
      .from("blogsInfo")
      .select("*")
      .eq("id", id)
      .single();
    if (error) throw error;
    return data;
  }
);

export const createBlog = createAsyncThunk("blogs/createBlog", async (blog) => {
  const { data, error } = await supabase.from("blogsInfo").insert([blog]);
  if (error) throw error;
  return data[0];
});

export const updateBlog = createAsyncThunk("blogs/updateBlog", async (blog) => {
  const { data, error } = await supabase
    .from("blogsInfo")
    .update(blog)
    .eq("id", blog.id);
  if (error) throw error;
  return data[0];
});

export const deleteBlog = createAsyncThunk("blogs/deleteBlog", async (id) => {
  const { data, error } = await supabase
    .from("blogsInfo")
    .delete()
    .eq("id", id);
  if (error) throw error;
  return id;
});

const blogSlice = createSlice({
  name: "blogs",
  initialState: {
    items: [],
    selectedBlog: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchBlogById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBlogById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.selectedBlog = action.payload;
      })
      .addCase(fetchBlogById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(createBlog.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(updateBlog.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (blog) => blog.id === action.payload.id
        );
        state.items[index] = action.payload;
      })
      .addCase(deleteBlog.fulfilled, (state, action) => {
        state.items = state.items.filter((blog) => blog.id !== action.payload);
      });
  },
});

export default blogSlice.reducer;
