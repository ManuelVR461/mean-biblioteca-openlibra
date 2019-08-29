import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

import { map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';

import { UserInteface } from 'src/app/models/user.interface';

const urlApi = 'http://localhost:3000/api/users';

// const headejson = {'Content-Type': 'application/json'};
// const headers = new HttpHeaders(headejson);


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  user: UserInteface;

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    Autorization: JSON.stringify(this.getToken())
  });

  loginUser(email: string, password: string) {
    // console.log('service email: ' + email + 'password: ' + password);
    return this.http.post<any>(`${urlApi}/login`, {email, password}, {headers: this.headers})
    .pipe(map(data => data));
  }

  logoutUser() {
    const accessToken = localStorage.getItem('accesstoken');
    localStorage.removeItem('accesstoken');
    localStorage.removeItem('currentuser');
    return true;
    // return this.http.post<UserInteface>(`${urlApi}/logout?access_token=${accessToken}`, {headers});
    // return this.http.post<UserInteface>(`${urlApi}/logout`, {headers});
  }

  registerUser(nom: string, cor: string, pwd: string) {
    return this.http.post<UserInteface>(`${urlApi}/register`, {
          nombre: nom,
          email: cor,
          password: pwd
        },
        {headers: this.headers})
        .pipe(map(data => data));
  }

  setUser(user: UserInteface): void {
    const userstring = JSON.stringify(user);
    localStorage.setItem('currentuser', userstring);
  }

  setToken(token): void {
    localStorage.setItem('accesstoken', token);
  }

  getToken() {
    return localStorage.getItem('accesstoken');
  }

  getUserPayLoad() {
    const token = localStorage.getItem('accesstoken');
    if (token) {
      const userPayLoad = token.split('.')[1];
      // console.log('payload ->' + userPayLoad);
      return userPayLoad;
    } else {
      return null;
    }
  }

  isLoggeIn() {
    const userPayLoad = this.getUserPayLoad();
    if (userPayLoad) {
      // return userPayLoad.expiresIn > Date.now() / 1000;
      return true;
    } else {
      return false;
    }
  }

  getCurrentUser(): UserInteface {
    const userstring = localStorage.getItem('currentuser');

    if (isNullOrUndefined(userstring)) {
      const user: UserInteface = JSON.parse(userstring);
      return user;
    } else {
      return null;
    }
  }

}
