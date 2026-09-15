import { Routes } from '@angular/router';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
import { BuscadorPokemonComponent } from './components/buscador-pokemon/buscador-pokemon.component';

// Importación de los componentes de los Pokémones
import { charmanderComponent } from './components/charmander/charmander.component';
import { CharizardComponent } from './components/charizard/charizard.component';
import { BulbasaurComponent } from './components/bulbasaur/bulbasaur.component';
import { SquirtleComponent } from './components/squirtle/squirtle.component';
import { GengarComponent } from './components/gengar/gengar.component';
import { MewtwoComponent } from './components/mewtwo/mewtwo.component';

export const routes: Routes = [ 
  { path: '', redirectTo: 'registro', pathMatch: 'full' },
  { path: 'registro', component: RegistroUsuarioComponent },
  { path: 'buscador', component: BuscadorPokemonComponent }, // Se asignó su propia ruta única

  // Rutas individuales de los Pokémones
  { path: 'pikachu', component: charmanderComponent },
  { path: 'charizard', component: CharizardComponent },
  { path: 'bulbasaur', component: BulbasaurComponent },
  { path: 'squirtle', component: SquirtleComponent },
  { path: 'gengar', component: GengarComponent },
  { path: 'mewtwo', component: MewtwoComponent },

  // Redirección para cualquier ruta no encontrada (debe ir siempre al final)
  { path: '**', redirectTo: 'registro' }
];