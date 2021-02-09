import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { TitlebodyComponent } from './titlebody/titlebody.component';
import { ItemsComponent } from './items/items.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/users.component';


const myPath  : Routes = [
 

{
  path:"login" ,component:HomeComponent,
  
},
{
  path:"purchase",component:ItemsComponent
},
{
  path:"cart",component:CartComponent
},

{
  path:"contactus",component:ContactComponent
},
{
  path:"users",component:UsersComponent
}

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    TitlebodyComponent,
    ItemsComponent,
    ContactComponent,
    CartComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(myPath),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
