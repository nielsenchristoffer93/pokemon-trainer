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
     * life cycle 
     * checks if name exists in storage and routes page to catalogue 
     */
    public ngOnInit(): void {
        if (getStorage("trainer-name")) {
            this.router.navigate(['/pokemon-catalogue']);
        }
    }

    /**
     * method to add name to storage and route user to catalogue
     * @param createForm 
     * @param trainerName name of the user
     */
    public onSubmit(createForm: NgForm, trainerName: string): void {
        setStorage("trainer-name", trainerName);
        this.router.navigate(['/pokemon-catalogue']);
    }

}