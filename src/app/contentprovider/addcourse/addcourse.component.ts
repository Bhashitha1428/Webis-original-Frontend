import { CourseService } from './../../services/course.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {


  name:String;
  author:String;
  description:String;
  content:String;
  url:string;
  constructor(private _courseService:CourseService,private router:Router) { }

  ngOnInit() {

  }

  submitCourse() {
    const course={
      
      name:this.name,
      author:this.author,
      description:this.description,
      content:this.content,
      url:this.url,

    }
    this._courseService.registerCourse(course)
      .subscribe(response => {
        this.router.navigateByUrl('/contentprovider');
        console.log(response);
      })
  }
 
  



}
