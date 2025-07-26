import { createAction, props } from "@ngrx/store";
import { type Post } from "./post.model";

export const postListFetch = createAction("[Post List Component] Post Fetch", props);

export const postListFetchSuccess = createAction("[Post List Component] Post Fetch Success", props<{payload: Post[]}>());

export const postListClear = createAction("[Post List Component] Post Clear");
