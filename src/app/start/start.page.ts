import { Component } from "@angular/core";

import { setStorage, getStorage } from "src/storage";

@Component({
    selector: "app-start-page",
    templateUrl: "./start.page.html",
    styleUrls: ["./start.page.css"]
})
export class StartPageComponent {
    public trainerName: string = "";

    public onLoginButtonClick(): void {
        setStorage("trainer-name", this.trainerName);
    }

}