import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MyserviceService } from './myservice.service';

import { OnInit } from '@angular/core';
import { NewCmpComponent } from "./new-cmp/new-cmp.component";
//import { Observable } from 'rxjs';
//import { interval } from 'rxjs';
//mport { map } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, NewCmpComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  //template: `
  //<div style="text-align: center">
    //<h3>Decimal Pipe</h3>
   // <p> {{decimalNum1 | number}} </p>
   // <p> {{decimalNum2 | number}} </p>
//  </div>
 // `
})
export class AppComponent {
  todaydate;
  componentproperty;
  constructor(private myservice:MyserviceService){
    this.todaydate = this.myservice.showTodayDate();
    this.componentproperty = this.myservice.serviceproperty;
  }
  title = 'ng-pipe-demo';
  presentDate = new Date();
  //time$ = Observable.interval(1000).map(val => new Date(0));
  price : number = 20000;
  decimalNum1: number = 8.7589623;
  decimalNum2 = 5.43;
  testArray = [1, 2, 3, 4, 5, 6,];
  testObject = {
    name: 'Osrun',
    age: 25,
    food: 'Cheesecake'
  };

  Fruits = ["Apple","Orange","Grapes","Mango","Kiwi","Pomegranate"]
  ngOnInit() {

  }
}
