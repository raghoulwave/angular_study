import { Component, input } from '@angular/core';
import { PostShortInfo } from '../post-short';

@Component({
  selector: 'app-post-short',
  templateUrl: './post-short.html',
  styleUrl: './post-short.css',
})
export class PostShort {
  postShort = input.required<PostShortInfo>();
}
