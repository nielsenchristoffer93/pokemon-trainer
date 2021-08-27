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
     * Lifecycle hook. 
     * Sets hasBeenCaught to true or false depending if pokemon is caught with checkIfPokemonIsCaught method.
     */
    public ngOnInit(): void {
        this.hasBeenCaught = this.pokemonService.checkIfPokemonIsCaught(this.pokemon!.name);
    }

    // The pokemon to display data from.
    @Input()
    pokemon: PokemonDetails | null = null;

    /**
     * Method to capitalize first letter in the name .
     * @param name Name of the pokemon.
     * @returns The name with capitalized first letter.
     */
    public capitalizeFirstLetter(name: string) {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    /**
     * Method to format number system of the pokemon id.
     * @param id Pokemon Id to format.
     * @returns String, Pokemon id with 3 number format eg. #001.
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
     * Method to mark if a pokemon is caught or not, and adds the pokemon to array of caught pokemons in pokemon service. 
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