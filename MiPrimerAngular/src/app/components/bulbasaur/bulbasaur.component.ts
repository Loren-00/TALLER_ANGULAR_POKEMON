import { Component } from '@angular/core';

@Component({
  selector: 'app-bulbasaur',
  standalone: true,
  template: `
    <main>
      <span>#001</span>
      <h1 (click)="mostrarNombre()" style="cursor: pointer;">{{ nombrePokemon }}</h1>
      <p>Tipo: Planta / Veneno</p>
    </main>
  `
})
export class BulbasaurComponent {
  nombrePokemon: string = 'Bulbasaur';

  mostrarNombre(): void {
    alert(this.nombrePokemon);
  }
}