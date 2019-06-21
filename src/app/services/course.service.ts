import { Injectable } from '@angular/core';

import {HttpClient,HttpClientModule,HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class CourseService {
  
  constructor(private http:HttpClient) { }
  getCourses(){
    const course=this.http.get("http://localhost:3000/course/display");
   // console.log(course);
    return course;
  
  }

  registerCourse(course){
    
    let headers=new HttpHeaders();
    headers.append('Content-Type','application/json'); 
   const a=this.http.post('http://localhost:3000/course/store',course,{headers:headers}).pipe(map((res:any)=>res));
  console.log(a);
  return a;

  }
 




}
