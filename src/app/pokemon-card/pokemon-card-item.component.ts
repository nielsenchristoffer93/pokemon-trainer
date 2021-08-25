import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { PokemonDetails, Types } from "../models/pokemon-details.model";
import { getStorage, setStorage } from "src/storage";
import { PokemonService } from "../services/pokemons.service";

@Component({
    selector: "app-pokemon-card-item",
    templateUrl: "./pokemon-card-item.component.html",
    styleUrls: ["./pokemon-card-item.component.css"]
})
export class PokemonCardItemComponent implements OnInit {

    constructor(private readonly pokemonService: PokemonService) { }

    //private _caughtPokemons: string[] = []
    hasBeenCaught: boolean = false;

    public ngOnInit(): void {
        this.hasBeenCaught = this.pokemonService.checkIfPokemonIsCaught(this.pokemonName);
        //console.log(this.pokemonName + " this.hasBeenCaught: " + this.hasBeenCaught);
        //this.hasBeenCaught = this.pokemonService.checkIfPokemonIsAlreadyCaught(this.pokemonName);      
    }

    //@Output() clicked: EventEmitter<string> = new EventEmitter();

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

    /*public checkBackgroundColor(type: string) {
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
    }*/

    public catchPokemon(): void {
        if (!this.hasBeenCaught) {
            this.hasBeenCaught = true;
        } else {
            this.hasBeenCaught = false;
        }

        //this.clicked.emit(this.pokemonName);
        this.pokemonService.addToCaughtPokemons(this.pokemonName);
        //console.log("isPokemonAlreadyCaught: " + this.isPokemonAlreadyCaught);
        //console.log("checkIfPokemonIsCaught: " + this.checkIfPokemonIsCaught());
    }

    /*public checkIfPokemonIsCaught() {
        let pokemons = JSON.parse(getStorage("caught-pokemons"));
        for (let index = 0; index < pokemons.length; index++) {
            console.log("pokemons[index]:" + pokemons[index] + " this.pokemonName: " + this.pokemonName);
            if (pokemons[index] === this.pokemonName) {
                this.hasBeenCaught = true;
            }
        }
        this.hasBeenCaught = false;
    }*/

    /*get isPokemonAlreadyCaught() {
        return this.pokemonService.checkIfPokemonIsAlreadyCaught(this.pokemonName);
    }*/

}