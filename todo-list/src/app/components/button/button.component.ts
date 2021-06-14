import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  // @Input allows me to take an input as a parameter when calling this component
  @Input() text: string;
  @Input() color: string;

  @Output()
  btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }


  // the onClick method is the method I call in the button component when it is clicked
  onClick(): void {
    //this tells the parent class that this button has been clicked
    this.btnClick.emit();
  }


}
