import { Component, computed, input } from '@angular/core';
import { POSTS } from '../posts';

@Component({
  selector: 'app-content-page',
  imports: [],
  templateUrl: './content-page.html',
  styleUrl: './content-page.css'
})
export class ContentPage {
  id = input.required<string>();

  post = computed(() =>
    POSTS.find(post => post.id === this.id())
  );
}
