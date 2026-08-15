import { Component, input } from '@angular/core';
import { PostShortInfo } from '../post-short';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-short',
  templateUrl: './post-short.html',
  styleUrl: './post-short.css',
  imports: [RouterLink],
})
export class PostShort {
  postShort = input.required<PostShortInfo>();
}
