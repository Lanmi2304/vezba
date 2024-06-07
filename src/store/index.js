import { createSlice, configureStore } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const articlesInitialState = {
  articles: [],
  favorites: [],
  filteredArticles: [],
  toggleAdd: false,
  search: "",
};

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
      console.log(state.articles);
      state.toggleAdd = false;
    },

    addToFavorite(state, action) {
      const id = action.payload;
      state.articles = state.articles.map((article) =>
        article.id === id
          ? { ...article, favorite: !article.favorite }
          : article
      );

      state.favorites = state.articles.filter((article) => article.favorite);
      // console.log(state.favorites);
    },

    searchByTitle: (state, action) => {
      state.search = action.payload;
      // console.log(state.articles);
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
