import { type Post } from "./post-store/post.model";

export interface AppState {
  postList: AppStateItem<Post>;
}

export interface AppStateItem<T> {
  data: T[];
  isLoading: boolean;
  error: string;
}
