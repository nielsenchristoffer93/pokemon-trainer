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

    constructor(private router: Router, private readonly pokemonService: PokemonService) { }

    /**
     * Lifecycle hook.
     * Checks if name exists in storage and routes user to startpage if not and fetches all pokemons if it does.
     */
    public ngOnInit(): void {
        if (!getStorage("trainer-name")) {
            this.router.navigate(['/']);
        }

        if (this.caughtPokemons) {
            this.pokemonService.fetchCaughtPokemons();
        }
    }

    /**
     * Gets the caught pokemons from pokemonservice to be used as a property in component.
     */
    get caughtPokemons(): PokemonDetails[] {
        return this.pokemonService.caughtPokemons();
    }

}