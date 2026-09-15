import { Component } from '@angular/core';

@Component({
  selector: 'app-gengar',
  standalone: true,
  template: `
    <main>
      <span>#094</span>
      <h1 (click)="mostrarNombre()" style="cursor: pointer;">{{ nombrePokemon }}</h1>
      <p>Tipo: Fantasma / Veneno</p>
    </main>
  `
})
export class GengarComponent {
  nombrePokemon: string = 'Gengar';

  mostrarNombre(): void {
    alert(this.nombrePokemon);
  }
}