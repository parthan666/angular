import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ItemsComponent } from '../items/items.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username:string;
  password:string;
  router: any;
  routerlink: string;
  constructor() { }

  ngOnInit(): void {
  }
Signup()
{
  if(this.username=="parthan" && this.password =="accenture")
  {
    // document.write("Successfully Logged In");
    console.log("Logged In");
    alert("Login Successful");
    this.router.navigate="items";
    //<a this.routerlink="signup"></a>
    
  }
  else
  {
    
    console.log("incorrect");
    alert("Incorrect Username or Password");
  }
}

}
