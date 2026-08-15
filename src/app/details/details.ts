import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostingService } from '../posting.service';
import { PostShortInfo } from '../post-short';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {

  route: ActivatedRoute = inject(ActivatedRoute);

  postingService = inject(PostingService);
  postShort: PostShortInfo | undefined;
  protected postShortId: number | undefined;

  constructor() {
    const postShortId = Number(this.route.snapshot.params['id']);
    this.postShort = this.postingService.getPostShortById(postShortId);
  }
}
