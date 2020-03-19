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
  input : string  = '';
  latestInput : string;
  showModal :boolean = false;

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
    this.input = '';
  }

  removeAll() {
    this.inputArray = [];
    this.showInitialText = true;
  }

  removeInd(ind) {
    if (ind) {
      var index = this.inputArray.indexOf(ind);
      if (index > -1) {
        this.inputArray.splice(index,1);
      }
    }
    if (this.inputArray.length == 0) {
      this.showInitialText = true;
    }
  }

  showLatest() {
    document.getElementById("body").style.opacity = "0.2";
    this.showModal = true;
    var length = this.inputArray.length;
    this.latestInput = this.inputArray[length - 1];
  }

  closeModal() {
    this.showModal = false;
    document.getElementById("body").style.opacity = "1";
  }

}