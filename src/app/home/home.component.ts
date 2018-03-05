import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <p>
   hey i am home 
    </p>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() {
    debugger;
    console.log("jai ho!!!");
   }

  ngOnInit() {
  }

}
