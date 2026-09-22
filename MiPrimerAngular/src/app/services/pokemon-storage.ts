import { Injectable, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Ajusta la interfaz según la estructura real de tus Pokémon
export interface PokemonTarjeta {
  id: number;
  nombre: string;
  esFavorito?: boolean;
  [key: string]: any;
}

@Injectable({
  providedIn: 'root'
})
export class PokemonStorage {
  private http = inject(HttpClient);
  private readonly STRORAGE_KEY = 'equipo_pokemon_registrado';

  misPokemons = signal<PokemonTarjeta[]>([]);
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

  constructor() {
    this.cargarDesdeStorage();
  }

  private cargarDesdeStorage() {
    const data = localStorage.getItem(this.STRORAGE_KEY);
    if (data) {
      this.misPokemons.set(JSON.parse(data));
    }
  }

  buscarEnApi(nombreId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${nombreId}`);
  }

  consultarPokemon(name: string): Observable<any> {
    return this.http.get(`${this.apiUrl}${name.toLowerCase()}`);
  }

  guardarPokemon(nuevo: PokemonTarjeta) {
    const actualizados = [...this.misPokemons(), nuevo];
    this.misPokemons.set(actualizados);
    localStorage.setItem(this.STRORAGE_KEY, JSON.stringify(actualizados));
  }

  actualizarFavorito(id: number) {
    const actualizados = this.misPokemons().map(poke => {
      if (poke.id === id) {
        return { ...poke, esFavorito: !poke.esFavorito };
      }
      return poke;
    });

    this.misPokemons.set(actualizados);
    localStorage.setItem(this.STRORAGE_KEY, JSON.stringify(actualizados));
  }

  liberarPokemon(id: number) {
    const filtrado = this.misPokemons().filter(poke => poke.id !== id);
    this.misPokemons.set(filtrado);
    localStorage.setItem(this.STRORAGE_KEY, JSON.stringify(filtrado));
  }
}