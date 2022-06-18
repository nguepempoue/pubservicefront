import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SupUtilityService {

  constructor() {

  }

  loadToken(){
    // return JSON.parse(localStorage.getItem('token') || '{}');
    return localStorage.getItem('token') || '{}';
  }

  isConnect() {
    return localStorage.getItem('token') !== null;
  }

  saveToken(token: any): void {
    localStorage.setItem('token', token);
    // var jwtHelper = new JwtHelperService();
    // this.roles = jwtHelper.decodeToken(token).roles;
  }

  deleteToken(){
    localStorage.removeItem('token');
  }

}
