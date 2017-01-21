import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from "@angular/router";
import {IdeasService} from "../shared/model/ideas-service.service";
import {Idea} from "../shared/model/Idea";

@Component({
  selector: 'app-single-idea',
  templateUrl: './single-idea.component.html',
  styleUrls: ['./single-idea.component.scss']
})
export class SingleIdeaComponent {

  id: string;
  idea: Idea;

  constructor(private ideasServices: IdeasService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      console.log(this.id);
    })

    this.ideasServices.getIdeaById(this.id).subscribe(
      idea => this.idea = idea
    );
    if(this.idea == null){
      console.log('null');
    }else{
      console.log(this.idea);
    }

  }
}
