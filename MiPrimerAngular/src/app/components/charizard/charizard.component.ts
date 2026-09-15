import { Component } from '@angular/core';

@Component({
  selector: 'app-charizard',
  standalone: true,
  template: `
    <main>
      <span>#006</span>
      <h1 (click)="mostrarNombre()" style="cursor: pointer;">{{ nombrePokemon }}</h1>
      <p>Tipo: Fuego / Volador</p>
    </main>
  `
})
export class CharizardComponent {
  nombrePokemon: string = 'Charizard';

  mostrarNombre(): void {
    alert(this.nombrePokemon);
  }
}