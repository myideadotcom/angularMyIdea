import {Injectable, Inject} from '@angular/core';
import {AngularFire, AngularFireDatabase, FirebaseRef} from "angularfire2";
import {Observable} from "rxjs";
import {Profile} from "./Profile";
import {Http} from "@angular/http";

@Injectable()
export class ProfilesService {


  constructor(private db: AngularFireDatabase, private http:Http) {

  }


  getUserByUserId(userId:string): Observable<Profile>{
    console.log('User Id'+userId+ 'i sprawdzenie danych');
    return this.db.list('profiles',{
      query: {
        orderByChild: 'userId',
        equalTo: userId
      }
    }).do(console.log).filter(result => result).map(result => Profile.parseFromJson(result[0])).do(console.log);
  }
}
