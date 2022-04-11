import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Day3-Tasks';
  
  DataFromLogin:any;
  Student:any;
  Students:{}[]=[];

  GetData(data: any){
    // console.log(data);
    // console.log(this.Students);
    this.Students.push(data);
    this.DataFromLogin=this.Students;
    // console.log(this.Students);
  }
}

