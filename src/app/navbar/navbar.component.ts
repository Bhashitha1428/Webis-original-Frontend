import { UsersService } from './../services/users.service';
import { Component, OnInit } from '@angular/core';
import { NgFlashMessageService } from 'ng-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  //courses = [1, 2, 3, 4, 5];
 // coursessub =[10, 9, 8, 7, 6];


  email:String;
  password:String;
  constructor(private auth:UsersService,private flash:NgFlashMessageService,private router:Router) { }

  signin(){

    const user={
      
      email:this.email,
      password:this.password
    }
    
    this.auth.authenticateUser(user).subscribe((data)=>{
      console.log(data);
      if(data.success){
        this.router.navigateByUrl('/contentprovider');
        this.auth.storeUserData(data.token,data.user);
        this.flash.showFlashMessage({messages:['LogIn Sucessfull!!'],
        dismissible:true,
        timeout:10000,
       type:'success'});
       
      }else{
        this.flash.showFlashMessage({messages:[data.msg],
        dismissible:true,
        timeout:10000,
       type:'danger'});
       return true
      }
    });
  }

  ngOnInit() {
  }

}
