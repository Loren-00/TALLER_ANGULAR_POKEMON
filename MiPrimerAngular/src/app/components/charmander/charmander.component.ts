import { Component } from '@angular/core';

@Component({
  selector: 'app-charmander',
  standalone: true,
  template: `
    <main>
      <span>#025</span>
      <h1 (click)="mostrarNombre()" style="cursor: pointer;">Charmander</h1>
      <p>Tipo: Fuego</p>
    </main>
  `
})
export class charmanderComponent {
  nombrePokemon: string = 'Charmander';

  mostrarNombre(): void {
    alert(this.nombrePokemon);
  }
}