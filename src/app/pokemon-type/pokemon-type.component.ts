import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-pokemon-type',
    templateUrl: './pokemon-type.component.html',
    styleUrls: ['./pokemon-type.component.css']
})
export class PokemonTypeComponent {

    @Input("pokemon_type_string")
    pokemonTypeString: string = "";

    /**
     * Method to change pokemon type icons
     * @param type of the specific icon
     * @returns type of icon (css code)
     */
    public changeIcon(type: string) {
        switch (type.toLowerCase()) {
            case "grass":
                return "fas fa-leaf";
            case "fire":
                return "fas fa-fire-alt";
            case "electric":
                return "fas fa-bolt";
            case "water":
                return "fas fa-tint";
            case "bug":
                return "fas fa-bug";
            case "dragon":
                return "fas fa-dragon";
            case "fighting":
                return "fas fa-fist-raised";
            case "flying":
                return "fas fa-feather-alt";
            case "ghost":
                return "fas fa-ghost";
            case "ground":
                return "fas fa-globe-americas";
            case "ice":
                return "fas fa-snowflake";
            case "normal":
                return "fas fa-square";
            case "poison":
                return "fas fa-skull-crossbones";
            case "psychic":
                return "fas fa-brain";
            case "rock":
                return "fas fa-gem";
            case "fairy":
                return "fas fa-star";
            default:
                return "#fff"
        }
    }
}
