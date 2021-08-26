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

    ngOnInit(): void {
        this.trainerName = getStorage("trainer-name");
    }
    
    public onLogoutLinkClick(): void {
        localStorage.clear();
        this.pokemonService.clearStates();
    }
}