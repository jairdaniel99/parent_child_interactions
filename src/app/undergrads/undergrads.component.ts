// we import EventEmitter to be able to emit events from child to parent
import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'undergrads',
  templateUrl: './undergrads.component.html',
  styleUrl: './undergrads.component.css',
})
export class UndergradsComponent {
  // child component accepts parent component via input keyword
  @Input() public studentList: any;
  // child component emits event to parent component via output decorator
  @Output() public studentDelete = new EventEmitter();

  delete(name: string) {
    this.studentDelete.emit(name);
  }
}
