import { Injectable } from '@angular/core';
import {HttpClient,HttpClientModule,HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  authToken:String;
  user={}
  constructor(private http:HttpClient,private router:Router,private jwtHelper:JwtHelperService) { }





  registerUser(user){
    
    let headers=new HttpHeaders();
    headers.append('Content-Type','application/json'); 
   const a=this.http.post('http://localhost:3000/users/register',user,{headers:headers}).pipe(map((res:any)=>res));
  console.log(a);
  return a;

  }

  authenticateUser(user){
    let headers=new HttpHeaders();
    headers.append('Content-Type','application/json'); 
    return this.http.post('http://localhost:3000/users/authenticate',user,{headers:headers}).pipe(map((res:any)=>res));
  }
  private saveToken(token:string):void{
    localStorage.setItem('usertoken',token);
   }

   loggedIn() {
    return !this.jwtHelper.isTokenExpired();
  }

  loadToken(){
    const token=localStorage.getItem('id_token');
    this.authToken=token;
  }

  storeUserData(token,user){

    localStorage.setItem('id_token',token);
    localStorage.setItem('user',JSON.stringify(user));
    this.authToken=token;
    this.user=user;
    // console.log(user);
   
  }
  logout(){
    console.log("In logout");
    this.authToken=null;
    this.user=null; 
    localStorage.clear();
    console.log(localStorage.getItem('id_token'));
  }
}
