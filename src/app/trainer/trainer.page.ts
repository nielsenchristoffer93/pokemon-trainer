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

    /**
     * life cycle
     * checks if name exists in storage and routes user to startpage if not and fetches all pokemons if it does
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
     * returns a pokemonsservice where it gets pokemon details of caught pokemons
     */
    get caughtPokemons(): PokemonDetails[] {
        return this.pokemonService.caughtPokemons();
    }

}