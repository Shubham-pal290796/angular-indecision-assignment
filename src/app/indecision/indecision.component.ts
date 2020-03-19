import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indecision',
  templateUrl: './indecision.component.html',
  styleUrls: ['./indecision.component.css']
})
export class IndecisionComponent implements OnInit {

  inputArray = [];
  showInitialText : boolean = true;
  inputVal : string = '';
  input : string = null;

  constructor() { }

  ngOnInit() {
  }

  handleInput(event) {
    this.inputVal = event.target.value;
  }

  submit() {
    if (this.inputVal != "") {
      this.inputArray.push(this.inputVal);
      if (this.inputArray.length > 0) {
        this.showInitialText = false;
      }
    }
    this.input = null;
  }

  removeAll() {
    this.inputArray = [];
    this.showInitialText = true;
  }


}