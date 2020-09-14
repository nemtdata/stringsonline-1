import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card-frontpage',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input('title') title;
  @Input('image') image;
  @Input('teaser') teaser;
  @Input('price') price;
  @Input('id') id;
  constructor() { }

  ngOnInit(): void {
  }

}
