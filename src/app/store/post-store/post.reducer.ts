import { createReducer, on } from "@ngrx/store";
import { type Post } from "./post.model";
import { postListClear, postListFetch, postListFetchError, postListFetchSuccess } from "./post.actions";
import type { AppStateItem } from "../app.state";

const INITIAL_STATE: AppStateItem<Post> = {
  isLoading: false,
  error: '',
  data: []
};

export const postListReducer = createReducer<AppStateItem<Post>>(
  INITIAL_STATE,
  on(postListFetch, state => ({
    ...state,
    isLoading: true,
    error: ''
  })),
  on(postListFetchSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    error: '',
    data: action.payload
  })),
  on(postListFetchError, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.payload
  })),
  on(postListClear, state => ({
    ...state,
    isLoading: false,
    error: '',
    data: []
  })),
);
