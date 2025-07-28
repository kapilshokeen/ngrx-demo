import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { postListActions } from "./post.actions";
import { exhaustMap, map } from "rxjs";
import { PostService } from "../../services/post.service";

@Injectable()
export class PostEffects {

  private actions$ = inject(Actions);

  private postService = inject(PostService);

  fetchPostList$ = createEffect(() => (
    this.actions$.pipe(
      ofType(postListActions.fetchList),
      exhaustMap(() => (
        this.postService.fetchPostList().pipe(
          map(res => postListActions.fetchListSuccess({ payload: { data: res }}))
        )
      ))
    )
  ));

}