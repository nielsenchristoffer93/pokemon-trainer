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

    constructor(private router: Router, private readonly pokemonService: PokemonService) { }

    /**
     * life cycle
     * checks if storage has a trainer name, if it doesn't redirect to startpage. Fetches all pokemons from API.
     */
    public ngOnInit(): void {
        if (!getStorage("trainer-name")) {
            this.router.navigate(['/']);
        }

        this.pokemonService.fetchAllPokemons();
    }

    /**
     * Gets the pokemons from pokemonservice to be used as a property in component.
     */
    get pokemons(): PokemonDetails[] {
        return this.pokemonService.pokemons();
    }
}