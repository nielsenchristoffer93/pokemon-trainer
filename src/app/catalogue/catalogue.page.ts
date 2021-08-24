import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { getStorage } from "src/storage";

@Component({
    selector: "app-catalogue-page",
    templateUrl: "./catalogue.page.html",
    styleUrls: ["./catalogue.page.css"]
})
export class CataloguePageComponent implements OnInit {

    constructor(private router: Router, private http: HttpClient) { }

    public ngOnInit(): void {
        if (!getStorage("trainer-name")) {
            this.router.navigate(['/']);
        }

        this.fetchAllPokemons();
    }

    public fetchAllPokemons(): Array<Object> {
        let pokemon: Object = []
        let pokemons: Object[] = [];

        for (let index = 1; index < 152; index++) {
            this.http.get(`https://pokeapi.co/api/v2/pokemon/${index}`).subscribe((response) => {
                pokemon = response;
                pokemons.push(pokemon);
                //console.log(pokemon);
            })
        }

        console.log(pokemons)

        pokemons.forEach(pokemon => {
            console.log(pokemon.valueOf());
        });

        return pokemons;
    }

}