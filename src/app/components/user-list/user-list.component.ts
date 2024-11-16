import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [UserService],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'role'];
  dataSource: any[] = []; // Todos los datos del API
  paginatedData: any[] = []; // Datos que se muestran en la página actual
  pageSize: number = 5; // Número de usuarios por página
  currentPage: number = 0; // Página actual

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // Cargar datos desde el API
    this.userService.getUsers().subscribe(data => {
      this.dataSource = data;
      this.updatePaginatedData(); // Actualizar datos paginados
    });
  }

  // Método para actualizar los datos de la página actual
  updatePaginatedData(): void {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedData = this.dataSource.slice(startIndex, endIndex);
  }

  // Cambiar página
  changePage(direction: number): void {
    this.currentPage += direction;
    this.updatePaginatedData();
  }

  // Obtener el número total de páginas
  getTotalPages(): number {
    return Math.ceil(this.dataSource.length / this.pageSize);
  }
}
