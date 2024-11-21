import { Component, Inject,ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PokeService } from '../../services/poke.service';
import { FormsModule } from '@angular/forms'; // Importar FormsModule

@Component({
  selector: 'app-pokemon-modal-e',
  standalone: true,  // Esto es importante para componentes standalone
  imports: [FormsModule],
  templateUrl: './pokemon-modal-e.component.html',
  styleUrls: ['./pokemon-modal-e.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PokemonModalEComponent {
  constructor(
    public dialogRef: MatDialogRef<PokemonModalEComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, // Recibe el Pokémon a editar

  ) {}

  // Método para guardar los cambios
  saveChanges(): void {
    this.dialogRef.close(this.data);
  }

  // Método para cancelar la edición
  cancelEdit(): void {
    this.dialogRef.close(); // Solo cierra el modal sin guardar cambios
  }
}
