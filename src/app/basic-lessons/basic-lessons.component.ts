import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-lessons',
  templateUrl: './basic-lessons.component.html',
  styleUrls: ['./basic-lessons.component.css']
})
export class BasicLessonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'blog';
  //parameter of ng if lessons
  show = "yes";
  shows = "green";

  // parameter of switch lessons
  color = "blue";

  //parameter of for loop lessons
  data = ['test' , 'progress', 'work', 'study']
}
