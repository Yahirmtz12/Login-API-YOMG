import { Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {path:'list', component:UserListComponent},
    {path:'login', component:LoginComponent},
    {path: '', redirectTo:'/login', pathMatch:'full'},

];