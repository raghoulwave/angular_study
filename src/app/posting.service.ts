import { Injectable } from '@angular/core';
import { PostShortInfo } from './post-short';

@Injectable({
  providedIn: 'root',
})
export class PostingService {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
  readonly text =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  protected postShortList: PostShortInfo[] = [
    {
      id: 1,
      title: 'Lorem ipsum 1',
      description: `${this.text}`,
      photo: `${this.baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
      author: 'Rahulin',
    },
    {
      id: 2,
      title: 'Lorem ipsum 2',
      description: `${this.text}`,
      photo: `${this.baseUrl}/brandon-griggs-wR11KBaB86U-unsplash.jpg`,
      author: 'Rahulin',
    },
    {
      id: 3,
      title: 'Lorem ipsum 3',
      description: `${this.text}`,
      photo: `${this.baseUrl}/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg`,
      author: 'Rahulin',
    },
    {
      id: 4,
      title: 'Lorem ipsum 4',
      description: `${this.text}`,
      photo: `${this.baseUrl}/ian-macdonald-W8z6aiwfi1E-unsplash.jpg`,
      author: 'Rahulin',
    },
    {
      id: 5,
      title: 'Lorem ipsum 5',
      description: `${this.text}`,
      photo: `${this.baseUrl}/krzysztof-hepner-978RAXoXnH4-unsplash.jpg`,
      author: 'Rahulin',
    },
    {
      id: 6,
      title: 'Lorem ipsum 6',
      description: `${this.text}`,
      photo: `${this.baseUrl}/r-architecture-JvQ0Q5IkeMM-unsplash.jpg`,
      author: 'Rahulin',
    },
    {
      id: 7,
      title: 'Lorem ipsum 7',
      description: `${this.text}`,
      photo: `${this.baseUrl}/phil-hearing-IYfp2Ixe9nM-unsplash.jpg`,
      author: 'Rahulin',
    },
    {
      id: 8,
      title: 'Lorem ipsum 8',
      description: `${this.text}`,
      photo: `${this.baseUrl}/r-architecture-GGupkreKwxA-unsplash.jpg`,
      author: 'Rahulin',
    },
    {
      id: 9,
      title: 'Lorem ipsum 9',
      description: `${this.text}`,
      photo: `${this.baseUrl}/saru-robert-9rP3mxf8qWI-unsplash.jpg`,
      author: 'Rahulin',
    },
    {
      id: 10,
      title: 'Lorem ipsum 10',
      description: `${this.text}`,
      photo: `${this.baseUrl}/webaliser-_TPTXZd9mOo-unsplash.jpg`,
      author: 'Rahulin',
    },
  ];

  getAllPostShorts(): PostShortInfo[] {
    return this.postShortList;
  }

  getPostShortById(id: number): PostShortInfo | undefined {
    return this.postShortList.find((post: PostShortInfo) => post.id === id);
  }

  submitComment(username: string, email: string, content: string) {
    console.log(`submitComment(${username}, ${email}, ${content})`);
  }
}
