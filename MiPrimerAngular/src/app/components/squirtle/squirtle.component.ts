import { Component } from '@angular/core';

@Component({
  selector: 'app-squirtle',
  standalone: true,
  template: `
    <main>
      <span>#007</span>
      <h1 (click)="mostrarNombre()" style="cursor: pointer;">Squirtle</h1>
      <p>Tipo: Agua</p>
    </main>
  `
})
export class SquirtleComponent {
  nombrePokemon: string = 'Squirtle';

  mostrarNombre(): void {
    alert(this.nombrePokemon);
  }
}