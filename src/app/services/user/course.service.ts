import { Injectable } from '@angular/core';
import {HttpClient,HttpClientModule,HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http:HttpClient,private jwtHelper:JwtHelperService) { }
 a:any;


  enroleCourse(){
    let user=localStorage.getItem('id_token')
     this.a=this.jwtHelper.decodeToken(user);
   

    console.log(this.a.name._id);
   
    let headers=new HttpHeaders();
    headers.append('Content-Type','application/json'); 
   const a=this.http.post('http://localhost:3000/course/register/:this.a.name._id)',{headers:headers}).pipe(map((res:any)=>res));
  console.log(a);
  return a;

  }

}
