import { ValidateinputService } from './services/validateinput.service';
import { UsersService } from './services/users.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplaycoursesComponent } from './displaycourses/displaycourses.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ContentproviderComponent } from './contentprovider/contentprovider.component';
import { AddcourseComponent } from './contentprovider/addcourse/addcourse.component';
import {HttpClientModule} from '@angular/common/http'
import { NgFlashMessagesModule } from 'ng-flash-messages';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';





export function tokenGetter() {
  return localStorage.getItem('id_token');
}
@NgModule({
  declarations: [
    AppComponent,
    DisplaycoursesComponent,
    NavbarComponent,
    HomeComponent,
    ContentproviderComponent,
    AddcourseComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgFlashMessagesModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
       
      }
    })
  ],
  providers: [UsersService,ValidateinputService],
  bootstrap: [AppComponent]
})
export class AppModule { }
