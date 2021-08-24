import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PokemonDetails } from "../models/pokemon-details.model";

@Injectable({
    providedIn: "root" // Singleton pattern
})
export class PokemonService {

    private _pokemons: PokemonDetails[] = [];
    private _error: string = "";

    // DI, Dependency Injection
    constructor(private readonly http: HttpClient) {
    }

    public async fetchAllPokemons() {
        let pokemon: PokemonDetails;

        for (let index = 1; index < 152; index++) {
            pokemon = await this.http.get<PokemonDetails>(`https://pokeapi.co/api/v2/pokemon/${index}`).toPromise()
            this._pokemons.push(pokemon);
        }

        //console.log(this._pokemons)
    }

    public pokemons(): PokemonDetails[] {
        return this._pokemons;
    }

    public error(): string {
        return this._error;
    }
}