import { ValidateinputService } from './../services/validateinput.service';
import { UsersService } from './../services/users.service';
import {  CourseService } from './../services/course.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Course:any;

  fname:String;
  lname:String;
 // role:String;
  email:String;
  password:String;


  constructor(private auth:UsersService,private flash:NgFlashMessageService,private ab:ValidateinputService,private _courseService:CourseService) { }
  signUp(){/////************* */   
    //
    const user={
      fname:this.fname,
      lname:this.lname,
      email:this.email,
     // role:this.role,
      password:this.password
    }
    
    // alert(user.fname);
     console.log(user);
    
    // if(!this.ab.validateRegister(user)){
    //   console.log("bbbbbbb")
    //     this.flash.showFlashMessage({messages:['please fill in all fields'],
    //     dismissible:true,
    //     timeout:10000,
    //    type:'danger'});
    //     return false;
    // }
    // if(!this.ab
    //   .validateEmail(user.email)){
       
    //   this.flash.showFlashMessage({messages:['please enter a valid email'],
    //     dismissible:true,
    //     timeout:10000,
    //    type:'danger'});
    //   return false;
    // }

    ////***********/// */



    
    this.auth.registerUser(user).subscribe((data)=>{
      if(data.success){
        
        this.flash.showFlashMessage({messages:['Registration Successful'],
        dismissible:true,
        timeout:10000,
       type:'success'});
      }else{
        
        this.flash.showFlashMessage({messages:['Registration Unsuccssful'],
        dismissible:true,
        timeout:10000,
       type:'danger'});
      }
    });
 } 
  

  ngOnInit() {
    console.log("ng on init")
    this._courseService.getCourses()
    .subscribe(response => {
      this.Course=response;
      console.log(response);
      //console.log(this.Course);
     // console.log(this.Course.name);
     // console.log(this.Course.duration);
    // this.Course = response["Videos"];
    });
    // console.log(this.videos);

}
}