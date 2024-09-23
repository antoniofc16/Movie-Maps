import { Injectable } from '@angular/core';
import { IUser } from '../interface/user.interface';
import { environment } from '../../../../../environments/environment';
import * as uuid from 'uuid';
import { routes } from '../../../../pages/app-routing.routing';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  getUser(): IUser{
    var localUser = localStorage.getItem('user');
    var user = JSON.parse(localUser!) as IUser;
    return user;
  }

  isAuthenticated(): boolean{
    var localUser = localStorage.getItem('user');
    var user = JSON.parse(localUser!) as IUser;

    if(user?.autheticated){
      return true;
    }

    return false;
  }

  login(username: string, password: string){
    if(username == environment.user && password == environment.password){
      var user: IUser = {
        id: uuid.v4(),
        username: username,
        autheticated: true
      }
      localStorage.setItem('user',JSON.stringify(user));
      return true;
    }

    return false;
  }

  logout(){
    localStorage.removeItem('user');
    this.router.navigate(['/auth/login']);
    return true;
  }
}
