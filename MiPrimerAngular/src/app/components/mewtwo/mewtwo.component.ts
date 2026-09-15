import { Component } from '@angular/core';

@Component({
  selector: 'app-mewtwo',
  standalone: true,
  template: `
    <main>
      <span>#150</span>
      <h1 (click)="mostrarNombre()" style="cursor: pointer;">{{ nombrePokemon }}</h1>
      <p>Tipo: Psíquico</p>
    </main>
  `
})
export class MewtwoComponent {
  nombrePokemon: string = 'Mewtwo';

  mostrarNombre(): void {
    alert(this.nombrePokemon);
  }
}