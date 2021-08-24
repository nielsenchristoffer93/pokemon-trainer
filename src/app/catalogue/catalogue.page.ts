import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { getStorage } from "src/storage";
import { PokemonDetails } from "../models/pokemon-details.model";
import { PokemonService } from "../services/pokemons.service";

@Component({
    selector: "app-catalogue-page",
    templateUrl: "./catalogue.page.html",
    styleUrls: ["./catalogue.page.css"]
})
export class CataloguePageComponent implements OnInit {

    //public pokemons: any[] = [];

    constructor(private router: Router, private http: HttpClient, private readonly pokemonService: PokemonService) { }

    public ngOnInit(): void {
        if (!getStorage("trainer-name")) {
            this.router.navigate(['/']);
        }

        this.pokemonService.fetchAllPokemons();
        //this.fetchAllPokemons();
    }

    get pokemons(): PokemonDetails[] {
        return this.pokemonService.pokemons();
    }

    /*public async fetchAllPokemons() {
        let pokemon: any = []
        let pokemons: any[] = [];

        for (let index = 1; index < 152; index++) {
            pokemon = await this.http.get(`https://pokeapi.co/api/v2/pokemon/${index}`).toPromise()
            pokemons.push(pokemon);
            //pokemons.push(this.fetchPokemon(index));
            //pokemons.push(this.fetchPokemon(index));
        }

        console.log(pokemons)
        this.pokemons = pokemons;
    }

    public async fetchPokemon(index: number): Promise<Object> {
        let pokemon: Object = []
        await this.http.get(`https://pokeapi.co/api/v2/pokemon/${index}`).subscribe((response) => {
            pokemon = response;
        });

        return pokemon;
    }*/
}