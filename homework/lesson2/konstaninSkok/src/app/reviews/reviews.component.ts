import {Component, OnInit, Input} from '@angular/core';
import {Hotel} from '../app.component';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  @Input() selectedHotel: Hotel;

  constructor() { }

  ngOnInit() {
  }

  public getStarsArray(stars: number) {
    if (stars) {
      return new Array(stars);
    }
    return [];
  }

}
