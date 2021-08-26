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
     * life cycle
     * gets trainer from storage & assigns trainerName 
     */
    ngOnInit(): void {
        this.trainerName = getStorage("trainer-name");
    }
    
    /**
     * calls methods to clear states and storage when logging out
     */
    public onLogoutLinkClick(): void {
        localStorage.clear();
        this.pokemonService.clearStates();
    }
}