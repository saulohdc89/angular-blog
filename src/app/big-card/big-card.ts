import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-big-card',
  imports: [RouterLink],
  templateUrl: './big-card.html',
  styleUrl: './big-card.css'
})
export class BigCard {
  id = input.required<string>();
  category = input.required<string>();
  title = input.required<string>();
  description = input.required<string>();
  author = input.required<string>();
  date = input.required<string>();
}
