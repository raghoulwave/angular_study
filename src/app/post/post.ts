import { Component, inject } from '@angular/core';
import { PostShort } from '../post-short/post-short';
import { PostingService } from '../posting.service';
import { PostShortInfo } from '../post-short';

@Component({
  selector: 'app-post',
  imports: [PostShort],
  templateUrl: './post.html',
  styleUrl: './post.css',
})
export class Post {
  postShortList: PostShortInfo[] = [];
  postingService: PostingService = inject(PostingService);

  constructor() {
    this.postShortList = this.postingService.getAllPostShorts();
  }
}
