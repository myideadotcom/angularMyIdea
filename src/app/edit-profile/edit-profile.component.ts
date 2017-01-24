import { Component, OnInit } from '@angular/core';
import {AngularFire, FirebaseListObservable} from "angularfire2";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent {

  form: FormGroup;
  profiles: FirebaseListObservable<any>;

  constructor(private fb: FormBuilder, private af: AngularFire) {
    this.form = this.fb.group({
      description: ['',Validators.required],
      avatarUrl: ['', Validators.required]
    });
    this.profiles = this.af.database.list('profiles');
  }

  confirmEditing(){

  }
}
