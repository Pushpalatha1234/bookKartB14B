import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WishlistComponent } from './wishlist/wishlist.component';


const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'Register', component: RegisterComponent },
  { path: 'Login', component: LoginComponent },
  {path:'addtocart',component: AddtocartComponent},
  {path:'favorite',component: WishlistComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, RegisterComponent, AddtocartComponent, WishlistComponent]