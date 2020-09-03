import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-featured-card',
  templateUrl: './featured-card.component.html',
  styleUrls: ['./featured-card.component.scss']
})
export class FeaturedCardComponent implements OnInit {

  // title of the card
  @Input() title: string;

  // description of the card
  @Input() description: string;

  // True if the card have orange background
  @Input() orangeBg: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
