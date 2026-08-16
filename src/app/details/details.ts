import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostingService } from '../posting.service';
import { PostShortInfo } from '../post-short';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-details',
  imports: [ ReactiveFormsModule ],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {

  route: ActivatedRoute = inject(ActivatedRoute);

  postingService = inject(PostingService);
  postShort: PostShortInfo | undefined;
  protected postShortId: number | undefined;

  commentForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    content: new FormControl('')
  });

  constructor() {
    const postShortId = Number(this.route.snapshot.params['id']);
    this.postShort = this.postingService.getPostShortById(postShortId);
  }

  submitComment(){
    this.postingService.submitComment(
      this.commentForm.value.username ?? '',
      this.commentForm.value.email ?? '',
      this.commentForm.value.content ?? ''
    )
  }
}
