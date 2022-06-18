
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Sector } from "../classes/Sector";
import { UserLogin } from "../classes/UserLogin";
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private baseUrl = environment.baseUrlApi

  constructor(private httpClient: HttpClient){}

  login(user: UserLogin){
    return this.httpClient.post(this.baseUrl+'/login', user, {observe: 'response'});
  }
}
