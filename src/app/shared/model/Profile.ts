export class Profile{

  constructor(public $key:string, public userId:string, public description:string, public avatarUrl: string){
  }

  static parseFromArray(array): Profile[]{
    return array.map(Profile.parseFromJson);
  }

  static parseFromJson({$key, userId, description, avatarUrl}):Profile{
    console.log('Co tu wchodzi: '+ $key);
    return new Profile($key, userId, description, avatarUrl);
  }
}
