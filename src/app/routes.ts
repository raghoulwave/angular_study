import { Routes } from '@angular/router';
import { Post } from './post/post';
import { Details } from './details/details';

const routeConfig: Routes = [
  {
    path: '',
    component: Post,
    title: 'Home page',
  },
  {
    path: 'details/:id',
    component: Details,
    title: 'Post details',
  },
];

export default routeConfig;
