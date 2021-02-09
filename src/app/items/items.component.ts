import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  router: any;
  routerlink: string;
  constructor() { }

  ngOnInit(): void {
  }

}
