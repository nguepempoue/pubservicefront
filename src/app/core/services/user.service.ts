
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ProviderBean } from "../classes/ProviderBean";
import { Sector } from "../classes/Sector";
import { User } from "../classes/User";
import { SupUtilityService } from "./suputility.service";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = environment.baseUrlApi
  private headers = new HttpHeaders;

  constructor(private httpClient: HttpClient, supUtilityService: SupUtilityService){
    this.headers = new HttpHeaders({'content-type':'application/json', 'Authorization': supUtilityService.loadToken()});
  }


  getById(idUser: number): Observable<User>{
    return this.httpClient.get<User>(this.baseUrl+'/user/id?id=' + idUser, { 'headers': this.headers});
  }
  getByEmail(email: string): Observable<User>{
    return this.httpClient.get<User>(this.baseUrl+'/user/email?email=' + email, { 'headers': this.headers});
  }
  confirmToken(token: string): Observable<User>{
    return this.httpClient.get<User>(this.baseUrl+"/user/confirmToken?activated=" + token, { 'headers': this.headers});
  }
  getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.baseUrl + "/user/all", { 'headers': this.headers});
  }
  saveProvider(provider: ProviderBean): Observable<User> {
    return this.httpClient.post<User>(this.baseUrl + "/user/register", provider);
  }
}
