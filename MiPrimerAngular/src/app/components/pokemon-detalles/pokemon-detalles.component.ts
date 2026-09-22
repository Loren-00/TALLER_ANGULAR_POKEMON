import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PokemonStorage } from '../../services/pokemon-storage';

@Component({
  standalone: true,
  imports: [RouterLink],
  selector: 'app-pokemon-detalles',
  styleUrl: './pokemon-detalles.component.css',
  templateUrl: './pokemon-detalles.component.html',
})
export class PokemonDetallesComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private pokeService = inject(PokemonStorage);

  pokemonData: any = null;
  cargando: boolean = true;

  ngOnInit(): void {
    const pokeName = this.route.snapshot.params['name'];

    this.pokeService.consultarPokemon(pokeName).subscribe({
      next: (data) => {
        this.pokemonData = data;
        this.cargando = false;
      },
      error: (err) => {
        console.error('Se quemó esta vaina. No llegó ningún dato.', err);
        this.cargando = false;
      }
    });
  }
}