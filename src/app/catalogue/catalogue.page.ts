import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { getStorage, setStorage } from "src/storage";
import { PokemonDetails } from "../models/pokemon-details.model";
import { PokemonService } from "../services/pokemons.service";

@Component({
    selector: "app-catalogue-page",
    templateUrl: "./catalogue.page.html",
    styleUrls: ["./catalogue.page.css"]
})
export class CataloguePageComponent implements OnInit {

    //private _caughtPokemons: string[] = [];

    constructor(private router: Router, private http: HttpClient, private readonly pokemonService: PokemonService) { }

    public ngOnInit(): void {
        if (!getStorage("trainer-name")) {
            this.router.navigate(['/']);
        }

        this.pokemonService.fetchAllPokemons();
    }

    get pokemons(): PokemonDetails[] {
        return this.pokemonService.pokemons();
    }

    //public handlePokemonCardClicked(pokemonName: string): void {
        /*if (!this._caughtPokemons.includes(pokemonName)) {
            this._caughtPokemons.push(pokemonName);
            setStorage("caught-pokemons", JSON.stringify(this._caughtPokemons));
        }*/
        /*
        if (!this.pokemonService.caughtPokemonNames().includes(pokemonName)) {
            this.pokemonService.addToCaughtPokemons(pokemonName);
        }

        //console.log(this._caughtPokemons);
    }*/
}