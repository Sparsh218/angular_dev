import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent implements OnInit{

  constructor (private route: ActivatedRoute) {}

  message: string;

  ngOnInit(): void {
    
    this.message = this.route.snapshot.data['message'];

  }

}
