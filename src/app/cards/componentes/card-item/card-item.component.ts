// custom-card.component.ts

import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent {
  @Input() name: string;
  @Input() manaCost: string;
  @Input() colorIdentity: string;
  @Input() text: string;
  @Input() imageUrl: string;
}
