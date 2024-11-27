import { Component } from '@angular/core';
import { Server } from '../../model/server';
import { ServerService } from '../../services/servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  
  servers: Server[] = [];

  constructor(private serverService: ServerService) {
  }

  ngOnInit(): void {
    this.servers = this.serverService.servers;
  }
}
