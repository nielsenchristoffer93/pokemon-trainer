import { Component } from "@angular/core";

import { setStorage, getStorage } from "src/storage";

@Component({
    selector: "app-start-page",
    templateUrl: "./start.page.html",
    styleUrls: ["./start.page.css"]
})
export class StartPageComponent {
    //private trainerName: string = "";

    public onLoginButtonClick(trainerName:string): void {
        setStorage("trainer-name", trainerName);
    }

}