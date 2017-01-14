import {Component, OnInit} from '@angular/core';
import {AuthInfo} from "./shared/security/auth-info";
import {AuthService} from "./shared/security/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  authInfo: AuthInfo;

  constructor(private authService: AuthService) {

  }

  ngOnInit() {
    this.authService.authInfo$.subscribe(authInfo => this.authInfo = authInfo);
  }

}
