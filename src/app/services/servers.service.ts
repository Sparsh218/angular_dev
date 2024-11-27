import { Injectable } from '@angular/core';
import { Server } from '../model/server';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  servers: Server[] = [];

  constructor() {
    for (let i = 1; i < 4; i++) {
      this.addServer('Server ' + i, 'Active');
    }
  }

  addServer(name: string, status: string) {
    var user = new Server(this.servers.length + 1, name, status);
    this.servers.push(user);
  }

  getServerFromId(id: number): Server {
    return this.servers.find((server) => server.id === id);
  }

  updateServer(id: number, name: string, status: string) {
    var server = this.servers.at(id);
    server.name = name;
    server.status = status;
  }
}
