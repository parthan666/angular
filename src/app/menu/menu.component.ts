import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
names:string[];
  constructor() { 
this.names = ["Home","Login","Purchase","Contact us"];
  }
  ngOnInit(): void {
  }

}
