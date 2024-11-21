import { Component, Inject,ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pokemon-modal-d',
  templateUrl: './pokemon-modal-d.component.html',
  styleUrls: ['./pokemon-modal-d.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PokemonModalDComponent {

  constructor(
    public dialogRef: MatDialogRef<PokemonModalDComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any // Recibe el Pokémon a eliminar
  ) {}

  // Confirmar la eliminación
  confirmDelete(): void {
    this.dialogRef.close(true); // Devuelve true para confirmar la eliminación
  }

  // Cancelar la eliminación
  cancelDelete(): void {
    this.dialogRef.close(false); // Devuelve false para cancelar
  }
}
