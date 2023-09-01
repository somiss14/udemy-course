import {Component, OnInit} from '@angular/core';
import {logMessages} from "@angular-devkit/build-angular/src/tools/esbuild/utils";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  currentNumber: number;
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  constructor() {
  }

  ngOnInit() {
  }


  onIntervalFired(event: number) {
    if (event % 2 === 0) {
      this.evenNumbers.push(event)
    } else {
      this.oddNumbers.push(event)
    }
  }
}
