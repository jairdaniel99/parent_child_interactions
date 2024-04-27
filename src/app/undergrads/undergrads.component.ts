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
  @Output() public cryEvent = new EventEmitter();

  cryOutLoud() {
    //emit is a method that emits an event to parent component and can also pass data as an argument
    this.cryEvent.emit('I am crying out loud.');
  }
}
