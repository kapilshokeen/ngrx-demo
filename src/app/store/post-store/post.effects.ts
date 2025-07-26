import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { postListFetch, postListFetchSuccess } from "./post.actions";
import { exhaustMap, map } from "rxjs";
import { PostService } from "../../services/post.service";

@Injectable()
export class PostEffects {

  private actions$ = inject(Actions);

  private postService = inject(PostService);

  fetchPostList$ = createEffect(() => (
    this.actions$.pipe(
      ofType(postListFetch),
      exhaustMap(() => (
        this.postService.fetchPostList().pipe(
          map(res => postListFetchSuccess({ payload: res }))
        )
      ))
    )
  ));

}