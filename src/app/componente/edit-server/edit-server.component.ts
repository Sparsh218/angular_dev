import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Server } from '../../model/server';
import { ServerService } from '../../services/servers.service';
import { CanComponentDeactivate } from '../../guard/auth.guard';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrl: './edit-server.component.css',
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  editAllowed: number;
  server: Server;
  serverStatusTemp: string = '';
  changesDone =  false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private serverService: ServerService
  ) {}

  ngOnInit(): void {
    this.editAllowed = +this.route.snapshot.queryParams['allowEdit'];

    this.route.queryParams.subscribe((queryParams) => {
      this.editAllowed = +queryParams['allowEdit'];
    });

    var index = +this.route.snapshot.params['id'];
    this.server = this.serverService.getServerFromId(index);
    this.serverStatusTemp = this.server.status;

    this.route.params.subscribe((params) => {
      this.server = this.serverService.getServerFromId(+params['id']);
      this.serverStatusTemp = this.server.status;
    });
  }

  serverValueChange(value: string) {
    this.serverStatusTemp = value;
  }

  updateServer(name: string, status: string) {
    
    // var server = this.serverService.getServerFromId(id);
    this.server.name = name;
    
    // this.router.navigate(['../', this.server.id, { relativeTo: this.route }]);
    this.router.navigate(['../'], { relativeTo: this.route});
    // this.router.navigate(['servers']);  
  }

  canDectivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.editAllowed !== 1) {
      return true;
    }
    if (this.serverStatusTemp === this.server.status) {
      return confirm("Do you want to continue");
    } else {
      return true;
    }
  }
}
