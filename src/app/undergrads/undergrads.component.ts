import { Component, Input } from '@angular/core';

@Component({
  selector: 'undergrads',
  templateUrl: './undergrads.component.html',
  styleUrl: './undergrads.component.css',
})
export class UndergradsComponent {
  @Input() public studentList: any;
}
