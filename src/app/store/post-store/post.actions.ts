import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { type Post } from "./post.model";

export const postListActions = createActionGroup({
  source: "Post List",
  events: {
    "Fetch List": emptyProps(),
    "Fetch List Success": props<{payload: { data: Post[] }}>(),
    "Fetch List Error": props<{payload: { error: string; }}>(),
    "Clear List": emptyProps()
  }
});
