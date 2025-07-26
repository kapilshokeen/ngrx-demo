import { inject, Injectable } from '@angular/core';
import { APIService } from './api.service';
import { type Post } from '../store/post-store/post.model';
import { map } from 'rxjs';
import { fakerEN as faker } from '@faker-js/faker';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private BASE_URL = "https://jsonplaceholder.typicode.com/";

  private apiService = inject(APIService);

  fetchPostList() {
    return this.apiService.get<Post[]>(`${this.BASE_URL}posts`).pipe(
      map(res => res.map(
        item => ({
          ...item,
          user: {
            imageUrl: faker.image.avatar(),
            fullName: faker.person.fullName()
          }
        })
      ))
    );
  }

}
