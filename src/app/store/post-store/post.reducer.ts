import { createReducer, on } from "@ngrx/store";
import { type Post } from "./post.model";
import { postListClear, postListFetchSuccess } from "./post.actions";

const INITIAL_STATE: Post[] = [];

export const postListReducer = createReducer(
  INITIAL_STATE,
  on(postListFetchSuccess, (state, action) => {
    return [...state, ...action.payload];
  }),
  on(postListClear, () => []),
);