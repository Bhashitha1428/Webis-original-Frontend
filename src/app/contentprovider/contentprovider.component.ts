import { CourseService } from './../services/course.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contentprovider',
  templateUrl: './contentprovider.component.html',
  styleUrls: ['./contentprovider.component.css']
})
export class ContentproviderComponent implements OnInit {
Courses:any
  constructor(private _courseService:CourseService) { }

  ngOnInit() {

    console.log("ng on init")
    this._courseService.getCourses()
    .subscribe(response => {
      this.Courses=response;
      console.log(response);
      //console.log(this.Course);
     // console.log(this.Course.name);
     // console.log(this.Course.duration);
    // this.Course = response["Videos"];
    });


  }

}
