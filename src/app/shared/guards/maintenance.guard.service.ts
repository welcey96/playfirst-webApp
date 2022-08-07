import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { isMaintenance } from 'src/app/common/config';


@Injectable()
export class MaintenanceGuardService implements CanActivate {

  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (isMaintenance) {
      console.log(isMaintenance);
      return true;
    }
    else {
      this.router.navigate(['/'])
      return false;
    }
  }
}
