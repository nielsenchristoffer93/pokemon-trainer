import { Component, Input, OnInit } from "@angular/core";
import { PokemonDetails } from "../models/pokemon-details.model";
import { PokemonService } from "../services/pokemons.service";

@Component({
    selector: "app-pokemon-card-item",
    templateUrl: "./pokemon-card-item.component.html",
    styleUrls: ["./pokemon-card-item.component.css"]
})
export class PokemonCardItemComponent implements OnInit {

    constructor(private readonly pokemonService: PokemonService) { }

    hasBeenCaught: boolean = false;

    public ngOnInit(): void {
        this.hasBeenCaught = this.pokemonService.checkIfPokemonIsCaught(this.pokemon!.name);
    }

    @Input()
    pokemon: PokemonDetails | null = null;

    public capitalizeFirstLetter(name: string) {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    public convertPokemonId(id: number) {
        if (id >= 100) {
            return "#" + id;
        } else if (id >= 10) {
            return "#0" + id;
        } else {
            return "#00" + id;
        }
    }

    public catchPokemon(): void {
        if (!this.hasBeenCaught) {
            this.hasBeenCaught = true;
        } else {
            this.hasBeenCaught = false;
        }

        this.pokemonService.addToCaughtPokemons(this.pokemon!.name);
    }
}