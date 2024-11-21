import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokeService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  // Obtener la lista de Pokémon con su información básica
  getPokemons(limit: number, offset: number): Observable<any[]> {
    return this.http.get<any>(`${this.apiUrl}?limit=${limit}&offset=${offset}`).pipe(
      map((response) =>
        response.results.map((pokemon: any, index: number) => ({
          id: offset + index + 1,
          name: pokemon.name,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${offset + index + 1}.png`
        }))
      )
    );
  }
}
