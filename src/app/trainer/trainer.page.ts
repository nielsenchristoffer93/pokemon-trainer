import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { getStorage } from "src/storage";

@Component({
    selector: "app-trainer-page",
    templateUrl: "./trainer.page.html",
    styleUrls: ["./trainer.page.css"]
})
export class TrainerPageComponent {

    constructor(private router:Router) { }
    
    public ngOnInit():void {
        if (!getStorage("trainer-name")) {
            this.router.navigate(['/']);
        }
    }

}