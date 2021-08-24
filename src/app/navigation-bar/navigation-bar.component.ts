import { Component, Input, OnInit } from "@angular/core";
import { getStorage } from "src/storage";

@Component({
    selector: "app-navigation-bar",
    templateUrl: "./navigation-bar.component.html",
    styleUrls: ["./navigation-bar.component.css"]
})
export class NavigationBarComponent implements OnInit{

    @Input()
    trainerName:string = "";

    ngOnInit(): void {
        this.trainerName = getStorage("trainer-name");
    }

    /*public getTrainerName(): string {
        return getStorage("trainer-name");
    }*/

}