import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { postListActions } from '../../store/post-store/post.actions';
import { postListSelector } from '../../store/post-store/post.selectors';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss',
  imports: [
    AsyncPipe,
    RouterLink
  ]
})
export class PostListComponent {

  private store = inject(Store);

  protected postList$ = this.store.select(postListSelector);

  ngOnInit() {
    this.store.dispatch(postListActions.fetchList());
  }

  ngOnDestroy() {
    this.store.dispatch(postListActions.clearList());
  }

}
