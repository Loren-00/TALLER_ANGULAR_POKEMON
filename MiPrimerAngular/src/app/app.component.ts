import { Component } from '@angular/core';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
import { BuscadorPokemonComponent } from './components/buscador-pokemon/buscador-pokemon.component';
import { SquirtleComponent } from './components/squirtle/squirtle.component';
import { charmanderComponent } from './components/charmander/charmander.component';
import { BulbasaurComponent } from './components/bulbasaur/bulbasaur.component';
import { MewtwoComponent } from './components/mewtwo/mewtwo.component';
import { CharizardComponent } from './components/charizard/charizard.component';
import { GengarComponent } from './components/gengar/gengar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RegistroUsuarioComponent,
    BuscadorPokemonComponent,
    SquirtleComponent,
    CharizardComponent,
    charmanderComponent,
    BulbasaurComponent,
    GengarComponent,
    MewtwoComponent
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
  vistaActual: string = 'pokemones';

  cambiarVista(vista: string) {
    this.vistaActual = vista;
  }
}