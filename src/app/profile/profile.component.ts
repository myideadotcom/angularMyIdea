import { Component, OnInit } from '@angular/core';
import {ProfilesService} from "../shared/model/profiles.service";
import {Profile} from "../shared/model/Profile";
import {AuthService} from "../shared/security/auth.service";
import {AuthInfo} from "../shared/security/auth-info";
import {AngularFire} from "angularfire2";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile: Profile;
  uid: string;

  constructor(private profileService: ProfilesService, private af: AngularFire) {

  }

  ngOnInit() {
    this.af.auth.subscribe(auth => this.uid = auth.uid);
    this.profileService.getUserByUserId(this.uid).subscribe(
      result => this.profile = result
    );
    console.log(this.uid);
  }

}
