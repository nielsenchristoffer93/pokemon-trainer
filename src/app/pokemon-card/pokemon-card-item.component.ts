import { Component, Input } from "@angular/core";
import { PokemonDetails, Types } from "../models/pokemon-details.model";
import { setStorage } from "src/storage";

@Component({
    selector: "app-pokemon-card-item",
    templateUrl: "./pokemon-card-item.component.html",
    styleUrls: ["./pokemon-card-item.component.css"]
})
export class PokemonCardItemComponent {

    hasBeenCaught:boolean = false;

    @Input()
    pokemon: PokemonDetails | null = null;

    @Input("pokemon_id")
    pokemonId: number = 0;

    @Input("pokemon_name")
    pokemonName: string = "";

    @Input("pokemon_height")
    pokemonHeight: number = 0;

    @Input("pokemon_weight")
    pokemonWeight: number = 0;

    @Input("pokemon_types")
    pokemonTypes: Types[] = []

    public capitalizeFirstLetter(string: string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
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

    public checkBackgroundColor(type: string) {
        switch (type) {
            case "grass":
                return "#7AC74C";
            case "fire":
                return "#EE8130";
            case "electric":
                return "#F7D02C";
            case "water":
                return "#6390F0";
            case "bug":
                return "#A6B91A";
            case "dragon":
                return "#6F35FC";
            case "fighting":
                return "#C22E28";
            case "flying":
                return "#A98FF3";
            case "ghost":
                return "#735797";
            case "ground":
                return "#E2BF65";
            case "ice":
                return "#96D9D6";
            case "normal":
                return "#A8A77A";
            case "poison":
                return "#A33EA1";
            case "psychic":
                return "#F95587";
            case "rock":
                return "#B6A136";
            case "fairy":
                return "#D685AD";
            default:
                return "#fff"
        }
    }

    public catchPokemon():void {
        if (!this.hasBeenCaught) {
            this.hasBeenCaught = true;
        } else {
            this.hasBeenCaught = false;
        }

        setStorage("caught-pokemons", JSON.stringify(this.pokemon));
    }

}