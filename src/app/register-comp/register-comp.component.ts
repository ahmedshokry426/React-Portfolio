import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-register-comp',
  templateUrl: './register-comp.component.html',
  styleUrls: ['./register-comp.component.css']
})
export class RegisterCompComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  id='';
  password=0;
  Student:{idLogin:string, passwordLogin:number}={
    idLogin: '',
    passwordLogin: 0
  };
  @Output() myEvent = new EventEmitter;
  store() {
    if(this.id.length >= 3){
      if(this.password >= 20 && this.password < 40){
        this.Student.idLogin=this.id;
        this.Student.passwordLogin=this.password;
        this.myEvent.emit({...this.Student});
      }
    }
  }
}
