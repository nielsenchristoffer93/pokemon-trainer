import { Component, Input, OnInit } from "@angular/core";
import { getStorage } from "src/storage";
import { PokemonService } from "../services/pokemons.service";

@Component({
    selector: "app-navigation-bar",
    templateUrl: "./navigation-bar.component.html",
    styleUrls: ["./navigation-bar.component.css"]
})
export class NavigationBarComponent implements OnInit {

    constructor(private readonly pokemonService: PokemonService) { }

    trainerName: string = "";

    /**
     * Lifecycle hook
     * Get trainer name from storage & assigns to property trainerName to be used in component.
     */
    ngOnInit(): void {
        this.trainerName = getStorage("trainer-name");
    }
    
    /**
     * Clears localStorage of all key/value pairs and clears all the states in pokemonService.
     */
    public onLogoutLinkClick(): void {
        localStorage.clear();
        this.pokemonService.clearStates();
    }
}