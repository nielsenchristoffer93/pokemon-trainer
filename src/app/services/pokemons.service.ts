import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { getStorage, setStorage } from "src/storage";
import { PokemonDetails } from "../models/pokemon-details.model";

@Injectable({
    providedIn: "root" // Singleton pattern
})
export class PokemonService {

    private _pokemons: PokemonDetails[] = [];
    private _caughtPokemonNames: string[] = [];
    private _caughtPokemons: PokemonDetails[] = [];
    private _hasLoadedPokemons: boolean = false;

    constructor(private readonly http: HttpClient) {
    }

    /**
     * async method to fetch all caught pokemons
     */
    public async fetchCaughtPokemons() {
        let pokemon: PokemonDetails | void;
        this._caughtPokemons = [];

        //goes through all caught pokemons from storage and assign pokemons to "pokemon" from API
        for (const name of JSON.parse(getStorage("caught-pokemons"))) {
            pokemon = await this.http.get<PokemonDetails>(`https://pokeapi.co/api/v2/pokemon/${name}`)
                .toPromise()
                .catch((error: HttpErrorResponse) => {
                    console.log(error);
                })

            // If we didn't fetch a pokemon from api it most likely failed and we should exit loop.
            if (pokemon) {
                this._caughtPokemons.push(pokemon!);
            } else {
                break;
            }
        }
    }

    /**
     * Async method to get all pokemons from API
     */
    public async fetchAllPokemons() {
        let pokemon: PokemonDetails | void;

        // checks if pokemons already have been fetched to avoid unnecessary fetches
        if (!this._hasLoadedPokemons) {
            for (let index = 1; index < 152; index++) {
                pokemon = await this.http.get<PokemonDetails>(`https://pokeapi.co/api/v2/pokemon/${index}`)
                    .toPromise()
                    .catch((error: HttpErrorResponse) => {
                        console.log(error);
                    })

                // If we didn't fetch a pokemon from api it most likely failed and we should exit loop.
                if (pokemon) {
                    this._pokemons.push(pokemon!);
                } else {
                    break;
                }
            }
            this._hasLoadedPokemons = true;
        }
    }

    /**
     * method to get pokemon details
     * @returns details array
     */
    public pokemons(): PokemonDetails[] {
        return this._pokemons;
    }

    /**
     * method to get pokemon details of caught pokemons
     * @returns details array of caught pokemons
     */
    public caughtPokemons(): PokemonDetails[] {
        return this._caughtPokemons;
    }

    /**
     * Method checks if pokemon is already added and adds pokemon to caught pokemons if not
     * @param pokemonName name of the pokemon
     */
    addToCaughtPokemons(pokemonName: string) {
        if (!this._caughtPokemonNames.includes(pokemonName)) {
            this._caughtPokemonNames.push(pokemonName);
        } else if (this._caughtPokemonNames.includes(pokemonName)) {
            for (let index = 0; index < this._caughtPokemonNames.length; index++) {
                if (this._caughtPokemonNames[index] === pokemonName) {
                    this._caughtPokemonNames.splice(index, 1);
                }
            }
        }
        setStorage("caught-pokemons", JSON.stringify(this._caughtPokemonNames));
    }

    /**
     * method to check if a specific pokemon is caught 
     * @param pokemonName name of the pokemon
     * @returns true or false if pokemon is caught
     */
    public checkIfPokemonIsCaught(pokemonName: string): boolean {
        let pokemons = JSON.parse(getStorage("caught-pokemons"));

        for (let index = 0; index < pokemons.length; index++) {
            if (pokemons[index] === pokemonName) {
                return true;
            }
        }
        return false;
    }

    /**
     * method to clear all arrays/states
     */
    public clearStates() {
        this._caughtPokemonNames = [];
        this._caughtPokemons = [];
        this._pokemons = [];
        this._hasLoadedPokemons = false;
    }
}