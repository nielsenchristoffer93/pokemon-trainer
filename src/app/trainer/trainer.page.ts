import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { getStorage } from "src/storage";
import { PokemonDetails } from "../models/pokemon-details.model";
import { PokemonService } from "../services/pokemons.service";

@Component({
    selector: "app-trainer-page",
    templateUrl: "./trainer.page.html",
    styleUrls: ["./trainer.page.css"]
})
export class TrainerPageComponent {

    pokemons: PokemonDetails[] = [];

    constructor(private router: Router, private readonly pokemonService: PokemonService) { }

    public ngOnInit(): void {
        if (!getStorage("trainer-name")) {
            this.router.navigate(['/']);
        }

        if (this.caughtPokemons) {
            this.pokemonService.fetchCaughtPokemons();
            
            //TEST
            //this.pokemonService.fetchCaughtPokemons2();
        }
    }

    get caughtPokemons(): PokemonDetails[] {
        return this.pokemonService.caughtPokemons();
    }

}