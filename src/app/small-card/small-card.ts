import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-small-card',
  imports: [RouterLink],
  templateUrl: './small-card.html',
  styleUrl: './small-card.css'
})
export class SmallCard {
  id = input.required<string>();
  category = input.required<string>();
  title = input.required<string>();
  author = input.required<string>();
  date = input.required<string>();
}
