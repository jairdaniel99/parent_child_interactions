// we import EventEmitter to be able to emit events from child to parent
import {
  Component,
  Input,
  EventEmitter,
  Output,
  OnChanges,
} from '@angular/core';

@Component({
  selector: 'undergrads',
  templateUrl: './undergrads.component.html',
  styleUrl: './undergrads.component.css',
})
export class UndergradsComponent implements OnChanges {
  // child component accepts parent component via input keyword
  @Input() public studentList: any;
  // child component emits event to parent component via output decorator
  @Output() public studentDelete = new EventEmitter();

  //1. constructor function runs first when component is created
  constructor() {
    console.log('constructor: UndergradComponent is created');
  }

  //2. ngOnchange function runs when @input property changes
  ngOnChanges() {
    console.log(
      'ngOnChanges: an input property has changed: ' + this.studentList
    );
  }

  //3. ngOnInit function runs to initialize components properties and methods
  ngOnInit() {
    console.log('ngOnInit: UndergradComponent is initialized');
  }

  //4. ngDoCheck function runs when Angular checks for changes typically used for checking
  ngDoCheck() {
    console.log(
      'ngDoCheck: Angular is checking for changes in general for UndergradComponent'
    );
  }

  //5. ngOnDestroy function runs when component is destroyed used to cleanup resources
  ngOnDestroy() {
    console.log('ngOnDestroy: UndergradComponent is destroyed');
  }
  delete(name: string) {
    this.studentDelete.emit(name);
  }
}
