import { createReducer, on } from "@ngrx/store";
import { type Post } from "./post.model";
import { postListActions } from "./post.actions";
import type { AppStateItem } from "../app.state";

const INITIAL_STATE: AppStateItem<Post> = {
  isLoading: false,
  error: '',
  data: []
};

export const postListReducer = createReducer<AppStateItem<Post>>(
  INITIAL_STATE,
  on(postListActions.fetchList, state => ({
    ...state,
    isLoading: true,
    error: ''
  })),
  on(postListActions.fetchListSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    error: '',
    data: action.payload.data
  })),
  on(postListActions.fetchListError, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.payload.error
  })),
  on(postListActions.clearList, state => ({
    ...state,
    isLoading: false,
    error: '',
    data: []
  })),
);
