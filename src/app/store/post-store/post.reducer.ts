import { createReducer, on } from "@ngrx/store";
import { type Post } from "./post.model";
import { postListClear, postListFetchSuccess } from "./post.actions";
import type { AppStateItem } from "../app.state";

const INITIAL_STATE: AppStateItem<Post> = {
  isLoading: false,
  error: '',
  data: []
};

export const postListReducer = createReducer<AppStateItem<Post>>(
  INITIAL_STATE,
  on(postListFetchSuccess, (state, action) => {
    return {
      ...state,
      isLoading: false,
      error: '',
      data: action.payload
    };
  }),
  on(postListClear, () => ({ isLoading: false, error: '', data: [] })),
);
