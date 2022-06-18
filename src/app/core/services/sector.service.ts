
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Sector } from "../classes/Sector";
import { SupUtilityService } from "./suputility.service";
@Injectable({
  providedIn: 'root'
})
export class SectorService {

  private baseUrl = environment.baseUrlApi
  private headers = new HttpHeaders;

  constructor(private httpClient: HttpClient, supUtilityService: SupUtilityService){
    this.headers = new HttpHeaders({'content-type':'application/json', 'Authorization': supUtilityService.loadToken()});
  }

  getAllSectors(): Observable<Sector[]> {
    return this.httpClient.get<Sector[]>(this.baseUrl + "/sector/all", { 'headers': this.headers});
  }

  saveSector(sector: Sector): Observable<Sector> {
    return this.httpClient.post<Sector>(this.baseUrl + "/sector/add", sector, { 'headers': this.headers});
  }

  deleteSector(idSector: number){
    return this.httpClient.delete(this.baseUrl + "/sector/delete?idSector=" + idSector, { 'headers': this.headers});
 }

 updateSector(id: number, sector: Sector):Observable<Sector>{
  return this.httpClient.put<Sector>(this.baseUrl + "/sector/update?id=" + id, sector, { 'headers': this.headers});
}
}
