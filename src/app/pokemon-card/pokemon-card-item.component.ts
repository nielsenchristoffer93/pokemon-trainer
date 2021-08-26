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

    /**
     * life cycle 
     * sets hasBeenCaught true or false depending if pokemon is caught with checkIfPokemonIsCaught method
     */
    public ngOnInit(): void {
        this.hasBeenCaught = this.pokemonService.checkIfPokemonIsCaught(this.pokemon!.name);
    }


    @Input()
    pokemon: PokemonDetails | null = null;

    /**
     * method to capitalize first letter in the name 
     * @param name name of the pokemon
     * @returns the name with capitalized first letter
     */
    public capitalizeFirstLetter(name: string) {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    /**
     * method to format number system of the pokemon ID
     * @param id to format
     * @returns pokemon id with 3 number format
     */
    public convertPokemonId(id: number) {
        if (id >= 100) {
            return "#" + id;
        } else if (id >= 10) {
            return "#0" + id;
        } else {
            return "#00" + id;
        }
    }

    /**
     * method to mark if a pokemon is caught or not 
     */
    public catchPokemon(): void {
        if (!this.hasBeenCaught) {
            this.hasBeenCaught = true;
        } else {
            this.hasBeenCaught = false;
        }

        this.pokemonService.addToCaughtPokemons(this.pokemon!.name);
    }
}