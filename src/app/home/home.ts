import { Component } from '@angular/core';
import { BigCard } from '../big-card/big-card';
import { SmallCard } from '../small-card/small-card';

@Component({
  selector: 'app-home',
  imports: [BigCard, SmallCard],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
