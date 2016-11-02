import {Component, OnInit, Input} from '@angular/core';
import {Hotel} from '../app.component';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent implements OnInit {

  @Input() selectedHotel: Hotel;

  constructor() { }

  ngOnInit() {}

}
