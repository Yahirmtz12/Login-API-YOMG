import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PokemonModalComponent } from '../pokemon-modal/pokemon-modal.component'; // Importar el componente del modal
import { PokeService } from '../../services/poke.service';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { PokemonModalEComponent } from '../pokemon-modal-e/pokemon-modal-e.component'; // Asegúrate de importar el nuevo modal
import { PokemonModalDComponent } from '../pokemon-modal-d/pokemon-modal-d.component'; // Importa el modal de confirmación

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, MatIconModule,],
  providers: [PokeService],
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'image', 'name', 'actions'];
  dataSource: any[] = []; // Todos los Pokémon
  paginatedData: any[] = []; // Pokémon de la página actual
  pageSize: number = 6; // Número de Pokémon por página
  currentPage: number = 0; // Página actual
  selectedPokemon: any = null;

  constructor(private dialog: MatDialog, private pokeService: PokeService) {}

  ngOnInit(): void {
    this.loadPokemons();
  }

  // Cargar los Pokémon de la página actual
  loadPokemons(): void {
    const offset = this.currentPage * this.pageSize;
    this.pokeService.getPokemons(this.pageSize, offset).subscribe((data) => {
      this.dataSource = data;
      this.updatePaginatedData();
    });
  }

  // Actualizar los datos de la página actual
  

  // Ver más información de un Pokémon
  viewInfo(pokemonId: number): void {
    // Buscar el Pokémon por ID
    this.selectedPokemon = this.paginatedData.find(pokemon => pokemon.id === pokemonId);
    if (this.selectedPokemon) {
      // Abre el modal con los detalles del Pokémon
      this.dialog.open(PokemonModalComponent, {
        data: this.selectedPokemon
      });
    }
  }

  // Editar un Pokémon
  editPokemon(pokemonId: number): void {
    // Buscar el Pokémon original por ID
    const originalPokemon = this.paginatedData.find(pokemon => pokemon.id === pokemonId);
  
    if (originalPokemon) {
      // Crear una copia del Pokémon para editar
      const pokemonCopy = JSON.parse(JSON.stringify(originalPokemon));
  
      // Abrir el modal con la copia
      const dialogRef = this.dialog.open(PokemonModalEComponent, {
        data: pokemonCopy // Pasa la copia al modal
      });
  
      // Procesar los cambios después de cerrar el modal
      dialogRef.afterClosed().subscribe((updatedPokemon) => {
        if (updatedPokemon) {
          // Buscar el índice del Pokémon original en la tabla
          const index = this.paginatedData.findIndex(pokemon => pokemon.id === updatedPokemon.id);
          if (index !== -1) {
            // Actualizar los datos solo si se confirma
            this.paginatedData[index] = updatedPokemon;
            this.updatePaginatedData();
          }
        }
      });
    }
  }
  
  updatePaginatedData(): void {
    this.paginatedData = this.dataSource;
  }


  // Eliminar un Pokémon
  deletePokemon(pokemonId: number): void {
    this.selectedPokemon = this.paginatedData.find(pokemon => pokemon.id === pokemonId);
    if (this.selectedPokemon) {
      const dialogRef = this.dialog.open(PokemonModalDComponent, {
        data: this.selectedPokemon
      });

      dialogRef.afterClosed().subscribe((confirmed) => {
        if (confirmed) {
          // Eliminar el Pokémon de la tabla
          const index = this.paginatedData.findIndex(pokemon => pokemon.id === pokemonId);
          if (index !== -1) {
            this.paginatedData.splice(index, 1); // Elimina el Pokémon de la tabla
            this.updatePaginatedData(); // Actualiza la vista
          }
        }
      });
    }
  }

  // Cambiar página
  changePage(direction: number): void {
    this.currentPage += direction;
    this.loadPokemons();
  }

  // Obtener el número total de páginas
  getTotalPages(): number {
    return Math.ceil(1118 / this.pageSize); // Total de Pokémon en la API
  }
}
