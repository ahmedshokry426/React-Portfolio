import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-students-comp',
  templateUrl: './students-comp.component.html',
  styleUrls: ['./students-comp.component.css']
})
export class StudentsCompComponent implements OnInit {

  constructor() { }

  @Input() DataFromParent:any;
  ngOnInit(): void {
  }
}
