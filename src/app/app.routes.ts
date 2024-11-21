import { Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
export const routes: Routes = [
    {path:'list', component:UserListComponent},
    {path:'login', component:LoginComponent},
    {path:'home', component:HomeComponent},
    {path: '', redirectTo:'/login', pathMatch:'full'},

];