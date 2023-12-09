// custom-card.component.ts

import { Component, Input } from '@angular/core';

@Component({
  selector: 'set-item',
  templateUrl: './set-item.component.html',
  styleUrls: ['./set-item.component.css']
})
export class SetItemComponent {
  @Input() name: string;
  @Input() block: string;
  @Input() releaseDate: string;
}
