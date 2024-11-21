import { Component, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { PokemonListComponent } from "../pokemon-list/pokemon-list.component";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatTableModule,
    MatIconModule,
    PokemonListComponent
],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  userName: string | null = null;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe({
      next: (name) => {
        console.log('Nombre recibido en HomeComponent:', name); // Log para depurar
        this.userName = name;
      },
      error: (err) => {
        console.error('Error al obtener el usuario:', err);
      },
    });
  }
  logout(): void {
    this.userService.clearCurrentUser(); // Limpia el estado del usuario
    console.log('Cerrando sesión...');
    this.router.navigate(['/login']); // Redirige a la vista de login
  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.81, symbol: 'B' },
  ];
}
