import { Component, OnInit } from '@angular/core';
import {AngularFire, FirebaseListObservable} from "angularfire2";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-idea',
  templateUrl: './add-idea.component.html',
  styleUrls: ['./add-idea.component.scss']
})
export class AddIdeaComponent  {

  form: FormGroup;
  ideas: FirebaseListObservable<any>;

  constructor(private fb:FormBuilder, af: AngularFire) {
    this.form = this.fb.group({
      title: ['',Validators.required],
      description: ['',Validators.required]
    });
    this.ideas = af.database.list('ideas');
  }

  addIdea(){
    this.ideas.push({
      title: this.form.value.title,
      description: this.form.value.description
    });
  }
}
