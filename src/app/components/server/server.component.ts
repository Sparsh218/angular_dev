import { Component, OnDestroy, OnInit } from '@angular/core';
import { Server } from '../../model/server';
import { ServerService } from '../../services/servers.service';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { relative } from 'path';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.css',
})
export class ServerComponent implements OnInit , OnDestroy{
  server: Server;

  dataSubcription: Subscription = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private serverService: ServerService
  ) {}

  ngOnInit(): void {
    // var index = +this.route.snapshot.params['id'];
    // this.server = this.serverService.getServerFromId(index);

    // this.route.params.subscribe(
    //   (params) => {
    //     this.server = this.serverService.getServerFromId(+params['id']);
    //   }
    // );
    this.dataSubcription = this.route.data.subscribe((data) => {
      this.server = data['server'];
    });
  }

  onEditServer() {
    this.router.navigate(['edit'], {
      relativeTo: this.route,
      queryParamsHandling: 'preserve'
    });
  }

  ngOnDestroy(): void {
    this.dataSubcription.unsubscribe();
  }
}
