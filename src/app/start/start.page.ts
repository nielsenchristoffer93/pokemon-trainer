import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import { setStorage, getStorage } from "src/storage";

@Component({
    selector: "app-start-page",
    templateUrl: "./start.page.html",
    styleUrls: ["./start.page.css"]
})
export class StartPageComponent implements OnInit {

    constructor(private router: Router) { }

    /**
     * Lifecycle hook.
     * Checks if trainername exists in storage, if it does route page to catalogue.
     */
    public ngOnInit(): void {
        if (getStorage("trainer-name")) {
            this.router.navigate(['/pokemon-catalogue']);
        }
    }

    /**
     * Method to add trainer-name to storage and route user to catalogue.
     * @param createForm Angular form containing data.
     * @param trainerName Name of the trainer-name.
     */
    public onSubmit(createForm: NgForm, trainerName: string): void {
        setStorage("trainer-name", trainerName);
        this.router.navigate(['/pokemon-catalogue']);
    }

}