import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:Object;
  constructor( private http:HttpClient) { }

  ngOnInit(): void {

    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe(

    data => this.users = data
    );
  }

}
