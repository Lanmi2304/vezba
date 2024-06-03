import { createSlice, configureStore } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const articlesInitialState = { articles: [], toggleAdd: false };

const articleSlice = createSlice({
  name: "article",
  initialState: articlesInitialState,
  reducers: {
    addArticle(state, action) {
      const title = action.payload.title;
      const content = action.payload.content;

      if (title.trim() === "" || content.trim() === "") {
        alert("Inputs can not be empty!");
        return;
      }

      const newArticle = {
        id: nanoid(),
        title,
        content,
        favorite: false,
      };
      state.articles = [newArticle, ...state.articles];
      state.toggleAdd = false;
    },
    addShow(state) {
      state.toggleAdd = true;
    },
    hideShow(state) {
      state.toggleAdd = false;
    },
  },
});

export const articleActions = articleSlice.actions;

export const store = configureStore({
  reducer: {
    article: articleSlice.reducer,
  },
});