import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {

  user: User;
  
  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) {}

  ngOnInit(): void {

    var index = +this.route.snapshot.params['id'];
    this.user = this.userService.getUserFromId(index);

    this.route.params.subscribe(
      (params) => {
        this.user = this.userService.getUserFromId(+params['id']);
      }
    );
  }
}
