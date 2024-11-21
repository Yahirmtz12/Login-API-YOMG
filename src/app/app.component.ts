import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms'; 
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms'; // Importar FormsModule

import { MatSortModule } from '@angular/material/sort';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule,UserListComponent,FormsModule,
    LoginComponent],  // No BrowserModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Corrected 'styleUrl' to 'styleUrls'
})
export class AppComponent {
  title = 'consumo-api-YOMG';
}
