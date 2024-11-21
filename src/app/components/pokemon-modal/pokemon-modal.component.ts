import { Component, Inject , ViewEncapsulation} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pokemon-modal',
  templateUrl: './pokemon-modal.component.html',
  styleUrls: ['./pokemon-modal.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PokemonModalComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<PokemonModalComponent> // Inyectamos el servicio MatDialogRef
  ) {}

  close(): void {
    this.dialogRef.close(); // Cierra el modal
  }
}
