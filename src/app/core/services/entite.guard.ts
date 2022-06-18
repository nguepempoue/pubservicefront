import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { SupUtilityService } from "./suputility.service";

@Injectable({
    providedIn: 'root'
  })
  export class EntiteGuard implements CanActivate{
      constructor(private supUtilityService: SupUtilityService, private router: Router){

      }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
       if(!this.supUtilityService.isConnect()){
           this.router.navigateByUrl('/login');
           return false;
       }
       return true;
    }
  }
