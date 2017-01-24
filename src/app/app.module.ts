import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AngularFireModule, AuthProviders, AuthMethods} from 'angularfire2';



import { AppRouteModule } from './app-route/app-route.module';
import { AuthService } from './shared/security/auth.service';
import { RegisterComponent } from './register/register.component';
import { IdeasListComponent } from './ideas-list/ideas-list.component';
import { SingleIdeaComponent } from './single-idea/single-idea.component';
import { AddIdeaComponent } from './add-idea/add-idea.component';
import {IdeasService} from "./shared/model/ideas-service.service";
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import {ProfilesService} from "./shared/model/profiles.service";

var config = {
  apiKey: "AIzaSyBqMBdbnw8z3SEm6UYFVmC_xpZkHUXqtqU",
  authDomain: "myidea-c9d2b.firebaseapp.com",
  databaseURL: "https://myidea-c9d2b.firebaseio.com",
  storageBucket: "myidea-c9d2b.appspot.com",
  messagingSenderId: "1012947482588"
};

export const authConfig = {
  provder: AuthProviders.Password,
  method: AuthMethods.Password
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    IdeasListComponent,
    SingleIdeaComponent,
    AddIdeaComponent,
    ProfileComponent,
    EditProfileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2BootstrapModule,
    ReactiveFormsModule,
    AppRouteModule,
    AngularFireModule.initializeApp(config, authConfig)
  ],
  providers: [AuthService, IdeasService, ProfilesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
