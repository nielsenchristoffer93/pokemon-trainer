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

    public ngOnInit(): void {
        if (!getStorage("trainer-name")) {
            this.router.navigate(['/']);
        }

        this.pokemonService.fetchAllPokemons();
    }

    get pokemons(): PokemonDetails[] {
        return this.pokemonService.pokemons();
    }
}