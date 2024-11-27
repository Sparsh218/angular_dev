import { Injectable } from "@angular/core";
import { User } from "../model/user";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    users: User[] = [];
    
    constructor() {
        for (let i = 1; i < 4; i++) {
            this.addUser("User "+i);
        }
    }

    addUser(name: string) {
        var user = new User((this.users.length + 1), name);
        this.users.push(user);
        console.log(this.users);
    }

    getUserFromId(id: number): User {
        return this.users.find((user) => user.id === id);
    }
}