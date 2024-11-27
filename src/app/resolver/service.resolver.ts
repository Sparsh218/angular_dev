import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { ServerService } from "../services/servers.service";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ServiceResolver {

  constructor(private serverService: ServerService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // console.log("resolver");
    return this.serverService.getServerFromId(+route.params['id']);
  }
}